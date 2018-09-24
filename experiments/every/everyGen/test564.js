





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.9097830510613482e+307] = ["^azQ","v","1B","l"]
base_0[9] = true
return a*b*c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = null
argument5[5] = false
argument5[2] = [607,-100,49,122]
return a-b/c
};
var argument5 = "&";
var argument6 = "V";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ""
argument8['sJRZP'] = ["lbZ"," 9#$5f7Z,",1.7976931348623157e+308,"CO"]
return a-b/c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"969":"]","`r4":100,"":1.5963785914538266e+308,"4.2564146241699016e+307":"","Dx":"","1.4311173160664726e+308":122,"]i":"","XY%":1.0993039897452047e+308,"1.344989616301502e+308":9.431084139512358e+307,"4.25637444458747e+307":4.2392204934268733e+307}
return a-b/c
};
var argument10 = null;
var base_0 = ["aQ",627,"P","E","W"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["aQ",627,"P","E","W"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["aQ",627,"P","E","W"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["aQ",627,"P","E","W"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test564.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)