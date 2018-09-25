
var istanbul = require('istanbul');
var collector = new istanbul.Collector();
var reporter = new istanbul.Reporter();
var sync = true;
var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;
var sync = require('child_process').spawnSync;



if (process.argv.length < 5){
    console.log("Usage: node collectCoverage.js <path to directory containing tests> <name of instrumented library> <is a Promise polyfill : 0 for array, 1 for promise>");
    process.exit(1);
}

var covergaeRootDir = "coverage";


var testDir = process.argv[2];
var instrumentedPolyfill = process.argv[3];
var isPromisePolyfill = parseInt(process.argv[4]);

var  polyfillName = instrumentedPolyfill.substring(0, instrumentedPolyfill.indexOf("_instrumented.js"));
console.log('polyfillName:'+polyfillName);

if(isPromisePolyfill === 1){
  polyfillName = polyfillName.substring("promise_".length);
}
else if(isPromisePolyfill === 0){
    // assumption: array methodName does not contain '_'
    polyfillName = polyfillName.substring(polyfillName.indexOf('_')+1);
}




var destDir = path.join(covergaeRootDir, polyfillName+ "_" + path.basename(testDir));

if(!fs.existsSync(destDir))
    fs.mkdirSync(destDir);


var tmpFileName1 =  path.join(covergaeRootDir, polyfillName + "_" + path.basename(testDir) + "_tmp1.js");
var tmpFileName2 =  path.join(covergaeRootDir, polyfillName + "_" + path.basename(testDir) + "_tmp2.js");

var instrumented_file = path.join(".", "..", "instrumented_libraries", instrumentedPolyfill);

if(isPromisePolyfill === 1){
    var requireStr = "var Promise = require('"+ instrumented_file + "');\n";
}
else if(isPromisePolyfill === 0){
    var requireStr = "require('"+ instrumented_file + "');\n";
}


var items = fs.readdirSync('./' + testDir);

//preprocess and run
for (var i=0; i<items.length; i++) {
    var test = items[i];
    if (test.indexOf('.js')>-1 && test.indexOf('.json') === -1){
        console.log("generating test "+ test);
        var testFilePath = testDir + '/' + test;

        var genFilePath = destDir+ path.sep + test;
        var testName = path.basename(test, '.js');
        var testCoverageFilePath =  destDir + path.sep + testName + '_coverage.json';

        if(isPromisePolyfill === 1){
            var coverageStr = "\n\n"+
                "setTimeout(function(){" + "\n" +
                "   if (global.__coverage__){" + "\n" +
                "       require('fs').writeFileSync('"+ testCoverageFilePath + "',JSON.stringify(global.__coverage__));" + "\n" +
                "   }" +  "\n" +
                "}, 600)";
        }
        else{
            var coverageStr = "\n\n"+
                "if (global.__coverage__){" + "\n" +
                "    require('fs').writeFileSync('"+ testCoverageFilePath + "',JSON.stringify(global.__coverage__));" + "\n" +
                "}";
        }

        var command =
            'echo \"' + requireStr + '\" > ' + tmpFileName1 + ';' +
            'cat ' + tmpFileName1 + ' ' + testFilePath + ' > ' + tmpFileName2 + '; '+
            'echo \"' + coverageStr + '\" > ' + tmpFileName1 + ';' +
            'cat ' + tmpFileName2 + ' ' + tmpFileName1 + ' > ' + genFilePath + '; '+
             'timeout 5 node ' + genFilePath;

        // execute the command to measure coverage
        var result = sync(command, {shell: true});

        console.log("done for "+ testFilePath);
    }

}


items = fs.readdirSync('./' + destDir);

for (var i=0; i<items.length; i++) {
    var test = items[i];
    if (test.indexOf('coverage.json')>-1){
        var coverageJsonFile = './' + destDir + '/'+ test;
        console.log("adding coverage for "+ coverageJsonFile);
        collector.add(JSON.parse(fs.readFileSync(coverageJsonFile)))

    }

}

reporter.add('text');
reporter.addAll(['clover', 'cobertura']);
reporter.write(collector, sync, function () { console.log('done!'); });


