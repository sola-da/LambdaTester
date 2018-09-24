





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = null
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = {"0":59,"r-p4":"","":"-qjl"}
argument4[714] = {"6.109922509922479e+307":157}
return a-b+c
};
var argument3 = null;
var argument4 = ["Oy",705,82,"3=4jM","w","-","9"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = true
base_2[1][0] = {"59":823,"595":"","607":893,"618":"","655":"","":"u","ok(":7.584051725610258e+307,"A":"gP","?":"p","e":893}
argument6[618] = ["7pN","S",1.7976931348623157e+308]
return a-b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1] = {"-":4.800411600330327e+306,"Av":"m",">":1.0775601107214931e+308,"1.2534937140646153e+308":"","1.6990993937330923e+308":8.454386282065033e+307,"1.650936901893852e+308":893,"":""}
base_3[2] = null
return a+b*c
};
var base_0 = ["rx","l","9"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rx","l","9"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test269.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)