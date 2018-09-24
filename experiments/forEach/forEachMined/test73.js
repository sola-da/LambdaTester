





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    widths[id] = maxWidth;
};
var argument2 = function (k, v) {
 callbackArguments.push(arguments) 

    _r[k] = _r.objects[k];
};
var argument3 = ["Ecf"];
var argument4 = function (alias) {
 callbackArguments.push(arguments) 

    map[alias.toLowerCase()] = s;
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlDataProperty(entityType, prop, schema, keyNamesOnServer);
};
var argument8 = false;
var base_0 = [122,893,714,"XLy",-100,"K"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,893,714,"XLy",-100,"K"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,893,714,"XLy",-100,"K"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,893,714,"XLy",-100,"K"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)