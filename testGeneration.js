(function () {

    var esprima = require('esprima');
    var estraverse = require('estraverse');
    var fs = require('fs');
    var execSync = require('child_process').execSync;
    var generateFn = require('./utilities/generateFnBody.js').generateFn;
    var findPositions = require('./utilities/inferringSignature.js').findPositions;
    var Decisions = require('./utilities/randomGenerator.js').Decisions;
    var utility = require('./utilities/dirUtility.js');
    var typeOf = utility.typeOf;
    var _ = require("underscore");
    var fsextra = require('fs-extra')


    var fnNames = process.argv[2];
    var nbOfTests = process.argv[3];
    var setup = process.argv[4];
    var positionInference = Number(process.argv[5]);
    var typesOfCallbacks = Number(process.argv[6]);
    var dynAnalysis = Number(process.argv[7]);
    var testFolder = process.argv[8];
    var afterCallbackPaths = [];

    if (process.argv.length < 9){
        console.log('Usage: node testGeneration.js <function names> <number of tests> <setupCode> <feedback directed> <type of callacks> <include dynamic analysis> <test folder> <path to polyfills(optional)>');
        process.exit(1);
    }

    var setupCode = fs.readFileSync(setup).toString();
    var names = fnNames.split(' ');
    var positions = [];
    if (positionInference === 1) {
        console.log("Discovery phase...")
        positions = findPositions(setupCode, names);
        console.log(positions)

    }

    var setupValues = getDefinedVal();

    function getFeedback(test) {
        var feedback = {'error': null};
        try {
            var output = execSync('timeout 5 node ' + test).toString();

        } catch (e) {
            feedback.error = e.message;
        }

        return feedback;
    }


    function Call(baseVar, argVars, retVar, filter) {

        this.baseVar = baseVar;
        this.filter = filter;
        this.argVars = argVars;
        this.retVar = retVar;
    }

    Call.prototype = {
        toString: function () {
            if (!this.filter) {
                console.log(this);
            }
            if (typeOf(this.baseVar) === 'array' || typeOf(this.baseVar) === 'object') {
                this.baseVar = JSON.stringify(this.baseVar)
            }

            return this.retVar + " = " + this.baseVar + "." + this.filter + "(" + this.argVars.slice(0, this.argVars.length) + ")";

        },
        clone: function () {
            return new Call(this.baseVar, this.argVars, this.retVar, this.filter);
        }
    };


    function VarStore(varToType) {
        this.varToVal = {};
        this.varToType = varToType;
    }

    VarStore.prototype = {
        put: function (variable, val) {
            this.varToVal[variable] = val;
            this.varToType[variable] = typeOf(val);


        },
        get: function (variable) {
            if (!this.varToVal.hasOwnProperty(variable)) throw "Undefined variable " + variable;
            return this.varToVal[variable];
        }
    };

    function Test() {
        // static information
        this.statements = [];
        this.constantPool = {}; // variable identifier --> all values
        this.lastVarCtr = 0;
        this.varToType = {}; // string --> string
        this.nbOfArgs = 0;

    }

    Test.prototype = {
        freshVar: function (name) {
            return "var " + name;
        },
        varForConstant: function (constant, name) {
            var varName = name;
            this.constantPool[varName] = constant;
            return varName;
        },
        getLogs: function (fileName, base, result, baseArr, resultArr) {
            var methodStr = "function serialize(array){\n" +
                "return array.map(function(a){\n" +
                "if (a === null || a == undefined) return a;\n" +
                "var name = a.constructor.name;\n" +
                "if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')\n" +
                "return JSON.stringify(a);\n" +
                "return name;\n" +

                " });\n" +
                "}\n";

            var logStr = 'setTimeout(function(){\n' +
                'require("fs").writeFileSync("' + fileName + '",JSON.stringify({"baseObjects":serialize(' + baseArr + '),"returnObjects":serialize(' + resultArr + '),"callbackArgs":callbackArguments}))\n' +
                '},300)';

            return methodStr + logStr;
        },

        toString: function (pool, fnPool) {
            var result = setupCode + '\n';
            result += 'var callbackArguments = [];\n'

            // constants
            var constantVars = Object.keys(this.constantPool);

            for (var j = 0; j < constantVars.length; j++) {
                var constantVar = constantVars[j];

                var constant = this.constantPool[constantVar];
                var constantString = typeof constant === "string" && (setupValues.indexOf(constant) > -1 || constant.indexOf('function') > -1 || (pool && pool.indexOf(constant) > -1) || (fnPool && fnPool.indexOf(constant) > -1)) ? constant : "\"" + constant + "\"";
                if (Array.isArray(constant) || (constant && typeOf(constant) === "object")) {
                    constantString = JSON.stringify(constant);
                } else if (typeof constant === "boolean" || typeOf(constant) === 'null' || typeof constant === "number" || constant.indexOf('r_') == 0 || constant.indexOf('base_') == 0) {
                    constantString = constant;
                }

                result += "var " + constantVar + " = " + constantString + ";\n";


            }

            // statements
            var lastReturnVar = null;
            var lastBaseVar = null;
            for (var i = 0; i < this.statements.length; i++) {
                var statement = this.statements[i];


                if (statement.baseVar && statement.retVar) {
                    var retVar = statement.retVar;
                    lastReturnVar = retVar;
                    lastBaseVar = statement.baseVar;
                    result += 'try {' + '\n' + statement + '\n}\n' + "catch(e) {" + '\n' + retVar + "= \'Error\'" + '\n' + "}" + '\n';

                } else {
                    result += statement + "\n";

                }

            }

            return result;
        },
        clone: function () {
            var clonedTest = new Test();
            clonedTest.nbOfArgs = this.nbOfArgs;
            for (var i = 0; i < this.statements.length; i++) {
                var statement = this.statements[i];
                clonedTest.statements.push(_.clone(statement));
            }
            clonedTest.constantPool = _.clone(this.constantPool);
            clonedTest.lastVarCtr = this.lastVarCtr;
            clonedTest.varToType = JSON.parse(JSON.stringify(this.varToType));

            return clonedTest;
        }

    };


    function AppendAPICallTask(test) {
        this.test = test;
    }


    AppendAPICallTask.prototype.createCandidate = function (fnName, pool, fnPool, baseVar, retVar, nbOfCall) {
        var candidateTest = this.test.clone();
        var argVars = [];


        //pick random position
        var callpositions = getElFromMap(fnName);


        var callbackPosition = callpositions.length > 0 ? pickRandomEl(callpositions) : undefined;
        var nbOfArgs = callbackPosition !== undefined ? decisions.pickRandomNbOfArgs(callbackPosition) : decisions.pickRandomNbOfArgs(0);
        var newBase = pool.length > 0 ? pickRandomEl(pool) : decisions.pickRandomConstant(pickRandomEl(decisions.constantTypes))

        var start = candidateTest.nbOfArgs;

        for (var argIdx = start + 1; argIdx <= nbOfArgs + start; argIdx++) {
            var name = 'argument' + argIdx;

            if (argIdx - start === callbackPosition) {
                var position = argIdx;
                //here I fetch functions
                var f = generateFn(typesOfCallbacks, decisions, fnPool, afterCallbackPaths, fnName, start + 1, nbOfArgs,nbOfCall,position);

                argVars.push(candidateTest.varForConstant(f, name));

            } else {
                if (positionInference === 0) {
                    var randomType = pickRandomEl(decisions.constantTypes)
                    var value = decisions.pickRandomConstant(randomType);
                    argVars.push(candidateTest.varForConstant(value, name));
                } else {
                    if (decisions.pickRandomBoolean() === true && fnPool.length > 0) {
                        var exVal = pickRandomEl(fnPool);
                        argVars.push(candidateTest.varForConstant(exVal, name));
                    } else {
                        var randomType = pickRandomEl(decisions.constantTypes)
                        var value = decisions.pickRandomConstant(randomType);
                        argVars.push(candidateTest.varForConstant(value, name));
                    }
                }
            }

        }
        if (typeOf(newBase) === 'array' || typeOf(newBase) === 'object') {
            newBase = JSON.stringify(newBase)
        } else if (typeOf(newBase) === 'string' && setupValues.indexOf(newBase) === -1 && pool.indexOf(newBase) === -1) {
            newBase = "\"" + newBase + "\""
        }

        candidateTest.statements.push('var ' + baseVar + ' = ' + newBase);
        var call = new Call(baseVar, argVars, retVar, fnName);
        candidateTest.statements.push('var ' + retVar + '= undefined');
        candidateTest.statements.push(call);
        candidateTest.nbOfArgs += nbOfArgs;

        return candidateTest;
    };


    function pickRandomEl(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getElFromMap(fnName) {
        for (var i = 0; i < positions.length; i++) {
            if (positions[i]['name'] && positions[i]['name'] === fnName) {
                return positions[i]['positions'];
            }
        }
        return [];
    }

    function getDefinedVal() {
        var pool = [];
        var ast = esprima.parse(setupCode);
        estraverse.traverse(ast, {
            enter: function (node, parent) {

                if (node.type === 'VariableDeclarator' && node.init && (!node.init.callee || node.init.callee.name !== 'require')) {

                    pool.push(node.id.name)
                }

            }
        })
        return pool;
    }

    function getRandomBase(fnName) {
        for (var i = 0; i < decisions.constantTypes.length; i++) {

            var type = decisions.constantTypes[i];
            var randomObj = decisions.pickRandomConstant(type);

            if (randomObj && randomObj[fnName] && typeof randomObj[fnName] === 'function') {

                return randomObj;
            }
        }
        return undefined;

    }

    //this can be extended
    function extendPool(pool) {

        for (var i = 0; i < decisions.constantTypes.length; i++) {
            var type = decisions.constantTypes[i];
            if (type === 'null' || type === 'undefined' || type === 'boolean') {
                var el = decisions.pickRandomConstant(type);
                pool.push(el);

            }

        }

        return pool;

    }

    function makeStr(arr) {
        var str = '[';
        for (var i = 0; i < arr.length; i++) {
            if (i == (arr.length - 1)) {
                str += arr[i] + ']';
            } else {
                str += arr[i] + ',';
            }

        }

        return str;


    }


    var decisions = new Decisions();
    fs.mkdirSync('./' + testFolder);
    if (dynAnalysis === 1) {
        fs.mkdirSync('./generated_' + testFolder);

    }

    var tests = [];
    for (var i = 0; i < nbOfTests; i++) {
        tests.push(i);
    }


    console.log("Test generation phase....")
    for (var i = 0; i < nbOfTests; i++) {
        var testName = './' + testFolder + '/test' + i + '.js';
        var testJSON = './' + testFolder + '/test' + i + '.json';
        var test = new Test();
        var fnPool = extendPool(JSON.parse(JSON.stringify(setupValues)));
        var pool = setupValues.length > 0 ? JSON.parse(JSON.stringify(setupValues)) : [];
        var retVar = undefined;
        var baseVar = undefined;
        var toContinue = true;
        var baseArr = [];
        var retArr = [];

        if (positionInference === 0) {
            //just one call
            var fnName = pickRandomEl(names);
            if (pool.length === 0) {
                pool.push(getRandomBase(fnName))
            }
            retVar = 'r_0';
            baseVar = 'base_0';
            baseArr.push(baseVar);
            retArr.push(retVar);
            test = new AppendAPICallTask(test).createCandidate(fnName, pool, fnPool, baseVar, retVar, 0);
            var testCode = test.toString() + test.getLogs(testJSON, baseVar, retVar, makeStr(baseArr), makeStr(retArr));
            fs.writeFileSync(testName, testCode);
            execSync('node ' + testName)


        } else {

            //up to 4 attempts
            for (var j = 0; j < 4; j++) {
                if (toContinue == false) break;
                retVar = 'r_' + j;
                baseVar = 'base_' + j;
                baseArr.push(baseVar);
                retArr.push(retVar);
                var fnName = pickRandomEl(names);
                if (pool.length === 0) {
                    pool.push(getRandomBase(fnName))
                }
                if (decisions.pickRandomBoolean() === true) {
                    fnPool.push(retVar);

                }
                test = new AppendAPICallTask(test).createCandidate(fnName, pool, fnPool, baseVar, retVar, j);
                var testCode = test.toString(pool, fnPool) + test.getLogs(testJSON, baseVar, retVar, makeStr(baseArr), makeStr(retArr));
                fs.writeFileSync(testName, testCode);

                if (positionInference === 1) {
                    var feedback = getFeedback(testName);
                    pool.push(retVar)
                    if (fnPool.indexOf(retVar) === -1){
                        fnPool.push(retVar)
                    }

                    if (feedback.error !== null) {
                        toContinue = false;
                    }


                    if (dynAnalysis === 1) {
                        var models = process.argv[9].split(' ');
                        //update paths
                        for (var k = 0; k < models.length; k++) {
                            var model = models[k];
                            var requireModel = 'model_'+k+'.js';
                            fsextra.copySync(model,'./generated_'+testFolder+'/'+requireModel)

                            var strCode = 'require("./' + requireModel + '")\n';
                            strCode += test.toString();

                            var file1Name = './generated_' + testFolder + '/test' + i + '_model' + k + '.js';
                            fs.writeFileSync(file1Name, strCode);

                                execSync('timeout 5 node ../jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --analysis dynamicAnalysis.js ' + file1Name + ' ' + fnName + ' ' + testFolder);
                                afterCallbackPaths = JSON.parse(fs.readFileSync('./generated_' + testFolder + '/pathsAfterCallback.json'));




                        }


                    }
                }


            }
        }

    }
    if (dynAnalysis === 1){
        utility.deleteFolder('./generated_' + testFolder);

    }

})();
