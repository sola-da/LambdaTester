





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument2 = true;
var argument3 = true;
var argument4 = function (l) {
 callbackArguments.push(arguments) 

    return google.maps.event.removeListener(l);
};
var argument5 = null;
var argument6 = true;
var argument7 = function (co) {
 callbackArguments.push(arguments) 

    clearOriginalValues(co);
};
var argument8 = null;
var argument9 = {"122":"z","IT":"","":6.385193222636778e+307,"3.290124960106844e+307":-100};
var argument10 = function (axis) {
 callbackArguments.push(arguments) 

    axis.option.defaults({ Offset: 0.02 });
};
var argument11 = 100;
var argument12 = r_3;
var base_0 = ["g{","_",">)","`wM","_","`&","K"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g{","_",">)","`wM","_","`&","K"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g{","_",">)","`wM","_","`&","K"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g{","_",">)","`wM","_","`&","K"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test348.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)