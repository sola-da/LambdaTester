





var callbackArguments = [];
var argument1 = function (col, j) {
 callbackArguments.push(arguments) 

    out.push('  [' + j + '] \'' + col.colName + '\' (type: ' + col.colType + ', inspected: ' + (colTypes[j] ? 'number' : 'string') + (col.colLabel ? ', label: \'' + col.colLabel + '\'' : '') + ')');
};
var argument2 = null;
var argument3 = true;
var argument4 = function (logLevel) {
 callbackArguments.push(arguments) 

    angular.forEach($log[logLevel].logs, function (log) {
        angular.forEach(log, function (logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' + (logItem.stack || ''));
        });
    });
};
var argument5 = r_0;
var argument6 = function (file) {
 callbackArguments.push(arguments) 

    (function (file) {
        fs.readFile(path.join(buildBase, 'yql', file), stack.add(function (err, data) {
            var shasum = crypto.createHash('sha1');
            shasum.update(data);
            var d = shasum.digest('hex');
            results.post[file] = d;
        }));
    }(file));
};
var argument7 = {"460":9.392511797395458e+307,"783":100,"5.190459812018248e+307":627,"`r8[B":"Xh","U":"6","":3.640591554624933e+307,"1.4493068194254503e+308":"M","05n6":"g+","1.5825384517169325e+307":"@"};
var argument8 = function (file) {
 callbackArguments.push(arguments) 

    if (fsutils.isDirectory(d + '/' + file))
        return;
    if (file.charAt(0) == '.')
        return;
    if (file.substr(file.length - 3) === '.js')
        file = file.substr(0, file.length - 3);
    fileLoader.loadFile(type, file, dir);
};
var argument9 = null;
var argument10 = "";
var base_0 = [893,-1,"y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,"y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-1,"y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,"y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)