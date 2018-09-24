var path = require('path');

var istanbul = require('istanbul');
var fs = require('fs');

if(process.argv.length < 3){
    console.log("Usage: node istanbulInstrument.js <path to the Polyfill to be instrumented>");
    process.exit(1);
}

var inputPolyfillPath = process.argv[2];
var polyfillName = path.basename(inputPolyfillPath, ".js");
var methodName = path.basename(path.dirname(inputPolyfillPath));

var instrumentedPolyfillsDir = "./coverage-generated/instrumented_libraries";
var instrumentedPolyfillPath = path.join(instrumentedPolyfillsDir, methodName+ "_"+polyfillName + "_instrumented.js");

var instrumenter = new istanbul.Instrumenter();
var polyfill = fs.readFileSync(inputPolyfillPath).toString();
var generatedCode = instrumenter.instrumentSync(polyfill);
fs.writeFileSync(instrumentedPolyfillPath,generatedCode);
