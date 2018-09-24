





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    file = result.file;
    error = result.error;
    str += file + ': line ' + error.line + ', col ' + error.character + ', ' + error.reason + '\n';
};
var argument2 = function (col, j) {
 callbackArguments.push(arguments) 

    out.push('  [' + j + '] \'' + col.colName + '\' (type: ' + col.colType + ', inspected: ' + (colTypes[j] ? 'number' : 'string') + (col.colLabel ? ', label: \'' + col.colLabel + '\'' : '') + ')');
};
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    result[r.id] = r.topics;
};
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    assert.ok(_.isArray(c));
    assert.ok(c.length > 1);
    c.forEach(function (d) {
        assert.strictEqual(c, d.cluster);
        c.forEach(function (e) {
            assert.ok(spec.metric(d, e) < spec.clusterDistance * 2);
        });
    });
};
var argument5 = null;
var argument6 = ["^","3L","c","i","37tur",";","OV","z","9"];
var base_0 = [627,100,655,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,100,655,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,100,655,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,100,655,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)