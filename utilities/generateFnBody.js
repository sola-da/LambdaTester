var combinatorics = require('js-combinatorics');
var fs = require('fs');
var esprima = require('esprima');
var escodegen = require('escodegen');
var qc = require('quick_check');
var vm = require('vm');
var callbackProvider = require("../callbackMining/callbackProvider");

function typeOf(value) {
    if (value === null) return "null";
    if (value instanceof Array) return "array";
    return typeof value;
}


function generateReturnVal(args) {
    var uoperations = ['++', '--'];
    var boperations = ['+', '-', '*', '/'];
    var nbOfArgs = Math.floor(Math.random() * args.length);

    if (args.length === 1) {
        return args[0][0] + pickRandomEl(uoperations);
    } else {
        var str = '';
        for (var i = 0; i < args.length; i++) {
            if (i === args.length - 1) {
                str += args[i][0];
            } else {
                str += args[i][0] + pickRandomEl(boperations);
            }
        }

        return str;
    }


}

function generateWrites(paths, decision, start, nbOfArgs, j, position) {
    var min = 1;
    var max = 4;
    var nbOfWrites = Math.floor(Math.random() * (max - min + 1)) + min;

    var writes = [];

    for (var i = 0; i < nbOfWrites; i++) {
        var a = paths[Math.floor(Math.random() * paths.length)];

        if (a['path'] !== 'undefined' && a['path'].indexOf('callbackReturn') === -1) {
            var path = a['path'];
            if (path.indexOf('base') > -1) {
                var newPath = path.replace('base', 'base_' + j);
                var str = newPath + ' = ' + JSON.stringify(decision.pickRandomConstant(decision.pickRandomType()));
                writes.push(str);

                //this part has to be tested
            } else if (path.indexOf('argument') > -1) {

                var index = Number(path[8]);
                var newIndex = Number(path[8]) + start - 1;

                //change arguments that will be called only in this invocation
                if (newIndex !== position && newIndex < start + nbOfArgs) {
                    var oldArgNb = 'argument' + index;
                    var regExp = new RegExp(oldArgNb, 'g')
                    var newPath = path.replace(regExp, 'argument' + newIndex);
                    var str = newPath + ' = ' + JSON.stringify(decision.pickRandomConstant(decision.pickRandomType()));
                    writes.push(str);

                }


            }

        }
    }

    return writes;
}

function pickRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function generateFn(type, decision, fnPool, paths, fnName, start, nbArgs, j, position) {
    if (type === 0) {
        //empty callback
        return 'function callback(){callbackArguments.push(arguments)}'
    } else if (type === 1) {
        var f = qc.function(qc['any']);
        var newStr = processFn(f().toString())
        return newStr;

    } else if (type === 2) {
        var minedCallbacks = callbackProvider.getCallbacks(undefined, fnName);
        var c = minedCallbacks[Math.floor(Math.random() * minedCallbacks.length)].toString();


        return processFn(c);

    } else if (type === 3) {

        if (paths.length > 0) {
            var args;
            var argTypes = [];
            [1, 2, 3][fnName](function () {
                args = arguments;
            });

            var nbOfArguments = args.length;
            var argsymbol = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
            var currentsymbols = [];
            var argstring = '';
            for (var i = 0; i < nbOfArguments; i++) {

                if (i === nbOfArguments - 1) {
                    argstring += argsymbol[i];


                } else {
                    argstring += argsymbol[i] + ',';
                }
                currentsymbols.push([argsymbol[i], typeOf(args[i])]);
            }

            var returnStmt = generateReturnVal(currentsymbols)
            var writes = generateWrites(paths, decision, start, nbArgs, j, position)

            var fnStr = 'function callback(' + argstring + ') { \n';
            fnStr += 'callbackArguments.push(JSON.stringify(arguments))\n';
            for (var i = 0; i < writes.length; i++) {
                fnStr += writes[i] + '\n';
            }

            fnStr += 'return ' + returnStmt + '\n';
            fnStr += '}'

            return fnStr;
        } else {

            var randomEl = pickRandomEl(fnPool);
            var returnVal = typeOf(randomEl) === 'object' || typeOf(randomEl) === 'array' ? JSON.stringify(randomEl) : randomEl;

            var fnStr = 'function callback(){\n';
            fnStr += 'callbackArguments.push(JSON.stringify(arguments))\n';
            fnStr += 'return ' + returnVal + '\n';
            fnStr += '}'

            return fnStr;
        }

    }
}


function processFn(str) {

    return str.replace('{', '{\n callbackArguments.push(arguments) \n')
}

exports.generateFn = generateFn;






