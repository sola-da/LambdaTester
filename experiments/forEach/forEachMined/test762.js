





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(row.doc);
        delete currentBatch.diffs[row.id];
    }
};
var argument2 = function (ln) {
 callbackArguments.push(arguments) 

    keys[getKey(ln)] = true;
};
var argument3 = null;
var argument4 = [122,242,607,213,82,100,627,714,100];
var argument5 = function (categData) {
 callbackArguments.push(arguments) 

    var value = categData.dimensions(valueDimName).value();
    0 !== value && new CategSceneClass(categData, value);
};
var argument6 = 3.5666296680868445e+307;
var argument7 = function (val, key) {
 callbackArguments.push(arguments) 

    delete angular.callbacks[key];
};
var argument8 = r_1;
var base_0 = [-100,655,-100,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,-100,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,-100,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,655,-100,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test762.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)