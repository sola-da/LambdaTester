





var callbackArguments = [];
var argument1 = function (k, v) {
 callbackArguments.push(arguments) 

    _r[k] = _r.objects[k];
};
var argument2 = true;
var argument3 = function (mapping) {
 callbackArguments.push(arguments) 

    newMap[mapping[0]] = mapping[1];
};
var argument4 = null;
var argument5 = function (file) {
 callbackArguments.push(arguments) 

    files.push(file);
};
var argument6 = null;
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlDataProperty(entityType, prop, schema, keyNamesOnServer);
};
var argument8 = ["xk","D#","|","h"];
var base_0 = [59,595,823,843,-100,49,893,59,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,595,823,843,-100,49,893,59,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,595,823,843,-100,49,893,59,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,595,823,843,-100,49,893,59,5e-324]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test792.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)