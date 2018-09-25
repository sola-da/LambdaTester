var fs = require('fs');
var sync = require('child_process').spawnSync;
var esprima = require('esprima');
var estraverse = require('estraverse');
var escodegen = require('escodegen');
var fsextra = require('fs-extra');
var copyDir = require('copy-dir');
var utility = require('./utilities/dirUtility.js');
var type = Number(process.argv[2]);
var polyfillPath = process.argv[3];
var origTestFolder = process.argv[4];
if (process.argv.length < 5) {
    console.log('Usage: node testRunner.js <type of polyfill> <polyfill> <testFolder>');
    process.exit(1);
}
var testFolder = origTestFolder + 'Copy';
fs.mkdirSync(testFolder);
console.log(copyDir)

copyDir.sync(origTestFolder, testFolder);

var timeoutcommand = (process.platform === 'darwin') ? "gtimeout" : "timeout";
var polyfill = polyfillPath;


if (type === 1) {
    polyfill = polyfillPath;
} else {
    fsextra.copySync(polyfillPath, testFolder + '/model.js');
    polyfill = polyfillPath.split('/')[polyfillPath.split('/').length - 1].replace('.js', '');
    polyfillPath = './model.js'
}


var diffCallbacks = [];
var errorMessages = [];
var warningMessages = [];
var diffExSummary = [];
var diffStout = [];
var diffTests = [];
var diffTestsWithout = [];
var terErrors = [];
var diffBaseObj = [];
var diffReturnVal = [];
var diffCallbackArg = [];
var diffNbCallbackArg = [];


var items = fs.readdirSync('./' + testFolder);

for (var i = 0; i < items.length; i++) {
    var test = items[i];

    if (test.indexOf('.json') === -1) {
        console.log('checking test:' + test);
        var fileName = './' + testFolder + '/' + test;
        var data = fs.readFileSync(fileName, {encoding: 'utf-8'});
        var command = 'node ./' + testFolder + '/' + test;
        var jsonPath = fileName.replace('.js', '.json');
        if (fs.existsSync(jsonPath)) {

            var executionSummary = JSON.parse(fs.readFileSync(jsonPath));
            var result = sync(command, {shell: true});


            var nativestdout = result.stdout.toString();
            var nativestderr = result.stderr.toString();
            checkPolyfills(test, data, nativestdout, nativestderr, executionSummary);


        }


    }
}

console.log('different error messages:' + errorMessages.length);
console.log('termination errors:' + terErrors.length);
console.log('warning messages:' + warningMessages.length);
console.log('different stout:' + diffStout.length);
console.log('diff base objects:' + diffBaseObj.length);
console.log('diff return objects:' + diffReturnVal.length);
console.log('different state of callback arguments:' + diffCallbacks.length)
console.log('different nb of callback invocations:' + diffNbCallbackArg.length);
utility.deleteFolder(testFolder);

function checkPolyfills(testName, testCode, nativestdout, nativestderr, executionSummary) {
    var testId = testName + "_" + polyfill;

    var genFileName2 = './' + testFolder + '/' + testId + '.js';
    var command = timeoutcommand + ' 5 node ' + genFileName2 + ';  if [ "$?" = 124 ]; then echo " *** NON-TERMINATION DETECTED ***"; fi';
    /* 5-second timeout in case of nontermination */

    var code = undefined;
    try {
        if (type === 0) {
            code = 'require(\'' + polyfillPath + '\')\n' + preprocessTest(testCode, testId);

        } else if (type === 1) {
            code = 'Promise = require(\'' + polyfillPath + '\')\n' + preprocessTest(testCode, testId);

        }
    } catch (e) {

    }

    if (code) {
        fs.writeFileSync(genFileName2, code);
        var result = sync(command, {shell: true});

        console.log('-----------------------------------------------------------------------------');
        var jsonPath = './' + testFolder + '/' + testId + '_.json';
        var executionSummaryPoly = undefined;
        try {
            if (fs.existsSync(jsonPath)) {
                executionSummaryPoly = JSON.parse(fs.readFileSync(jsonPath));

            }
        } catch (e) {

        }
        if (executionSummaryPoly && JSON.stringify(executionSummary) !== JSON.stringify(executionSummaryPoly)) {
            console.log('*** ' + testName + ": different behavior detected for polyfill \"" + polyfill + "\"");
            console.log('different state of execution summary');
            var baseObjNative = executionSummary.baseObjects;
            var returnNative = executionSummary.returnObjects;
            var baseObjPoly = executionSummaryPoly.baseObjects;
            var returnPoly = executionSummaryPoly.returnObjects;
            var caNative = executionSummary.callbackArgs;
            var caPoly = executionSummaryPoly.callbackArgs;
            if (!isInArr(testName, diffTestsWithout)) {
                diffTestsWithout.push(testName)
            }

            if (!isInArr(testName, diffTests)) {
                diffTests.push(testName)
            }
            if (!isInArr(testName, diffExSummary)) {
                diffExSummary.push(testName)
            }

            if (JSON.stringify(baseObjNative) !== JSON.stringify(baseObjPoly)) {
                console.log('different state in receiver objects');

                if (!isInArr(testName, diffBaseObj)) {
                    diffBaseObj.push(testName)
                }

            }

            if (JSON.stringify(returnNative) !== JSON.stringify(returnPoly)) {
                console.log('different state in return objects');

                if (!isInArr(testName, diffReturnVal)) {
                    diffReturnVal.push(testName)
                }

            }


            if (caPoly !== undefined && JSON.stringify(caNative) !== JSON.stringify(caPoly)) {
                console.log('different state of callback arguments');
                if (!isInArr(testName, diffCallbacks)) {
                    diffCallbacks.push(testName)
                }

                if (caNative.length !== caPoly.length) {
                    if (!isInArr(testName, diffNbCallbackArg)) {
                        diffNbCallbackArg.push(testName)
                    }

                } else {
                    if (!isInArr(testName, diffCallbackArg)) {
                        diffCallbackArg.push(testName)
                    }

                }

            }


        }

        var stdout = result.stdout.toString();
        var stderr = result.stderr.toString();

        if (stdout.indexOf('NON-TERMINATION DETECTED') > -1) {
            console.log('NON-TERMINATION DETECTED for polyfill' + polyfill);
            if (!isInArr(testName, diffTests)) {
                diffTests.push(testName)
            }
            if (!isInArr(testName, terErrors)) {
                terErrors.push(testName)
            }

        }


        if ((isEmpty(nativestdout.replace(/\n/g, '').trim()) && !isEmpty(stdout.replace(/\n/g, '').trim()) && stdout.indexOf('NON-TERMINATION DETECTED') === -1) || (!isEmpty(nativestdout.replace(/\n/g, '').trim()) && isEmpty(stdout.replace(/\n/g, '').trim()) && stdout.indexOf('NON-TERMINATION DETECTED') === -1)) {
            console.log('*** ' + testName + ": different behavior detected for polyfill \"" + polyfill + "\"");
            console.log('  stdout (native): ' + nativestdout.replace(/\n/g, '').trim());
            console.log('  stdout (' + polyfill + '): ' + stdout.replace(/\n/g, '').trim());
            if (!isInArr(testName, diffTests)) {
                diffTests.push(testName)
            }
            if (!isInArr(testName, diffStout)) {
                diffStout.push(testName)
            }
            if (!isInArr(testName, diffTestsWithout)) {
                diffTestsWithout.push(testName)
            }

            //for termination errors

        }
        if ((isEmpty(nativestderr.trim()) && !isEmpty(stderr.trim())) || (!isEmpty(nativestderr.trim()) && isEmpty(stderr.trim()))) {

            if ((nativestderr.trim().indexOf('Warning') > -1 && nativestderr.trim().indexOf('TypeError') === -1) || (stderr.trim().indexOf('Warning') > -1 && stderr.trim().indexOf('TypeError') === -1)) {
                console.log('Warning message ' + testName + ' for polyfill ' + polyfill);
                console.log('  stderr (native): ' + nativestderr);
                console.log('  stderr (' + polyfill + '): ' + strip(stderr));
                if (!isInArr(testName, diffTests)) {
                    diffTests.push(testName)
                }
                if (!isInArr(testName, warningMessages)) {
                    warningMessages.push(testName)
                }
            } else {
                console.log('Error message ' + testName + ' for polyfill ' + polyfill);
                console.log('  stderr (native): ' + nativestderr);
                console.log('  stderr (' + polyfill + '): ' + strip(stderr));

                if (!isInArr(testName, diffTests)) {
                    diffTests.push(testName)
                }
                if (!isInArr(testName, errorMessages)) {
                    errorMessages.push(testName)
                }
                if (!isInArr(testName, diffTestsWithout)) {
                    diffTestsWithout.push(testName)
                }

            }


        }


    }

}


function strip(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        var code = s.charCodeAt(i);
        if (s[i] === '\n') {
            result += '\\n';
        } else if (code !== 10) {
            result += s[i];
        }
    }
    return result;
}

function isInArr(el, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == el) return true;
    }
    return false;
}


function isEmpty(str) {
    return (!str || 0 === str.length);
}
function preprocessTest(code, name) {
    var ast = esprima.parse(code);
    estraverse.traverse(ast, {
        enter: function (node, parent) {
            if (node.type == 'CallExpression' && node.callee.type == 'MemberExpression' && node.callee.property && node.callee.property.name === 'writeFileSync') {
                node.arguments[0].value = './' + testFolder + '/' + name + '_.json';
                node.arguments[0].raw = './' + testFolder + '/' + name + '_.json';

            }
        }
    })

    return escodegen.generate(ast);
}