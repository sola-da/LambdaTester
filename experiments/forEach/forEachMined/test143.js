





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i > depth && a[n])
        delete a[n];
};
var argument2 = [1.7976931348623157e+308,595,627,-1,-1];
var argument3 = function (col, j) {
 callbackArguments.push(arguments) 

    out.push('  [' + j + '] \'' + col.colName + '\' (type: ' + col.colType + ', inspected: ' + (colTypes[j] ? 'number' : 'string') + (col.colLabel ? ', label: \'' + col.colLabel + '\'' : '') + ')');
};
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    assert.isTrue(!!~source.indexOf(prop));
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    t.is('number', typeof n);
};
var base_0 = ["d{","p","Gfi","CLBX"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d{","p","Gfi","CLBX"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d{","p","Gfi","CLBX"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d{","p","Gfi","CLBX"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test143.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)