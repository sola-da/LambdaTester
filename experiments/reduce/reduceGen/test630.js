





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = "wD&li-"
return a/b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = ""
return a-b/c+d
};
var argument6 = false;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"893":"","1.7796705461753564e+308":82}
argument7[460] = ""
argument8[3] = 0
return a*b+c/d
};
var argument10 = "";
var argument11 = "48";
var argument12 = r_2;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[460] = {"25":"c&NXI","s":"","":627,"h^w":6.353482129003912e+307,"1.1800415303324484e+308":","}
argument12[627] = 1.7976931348623157e+308
argument11[460] = 460
return a/b/c*d
};
var base_0 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">3",")","`:","Y",">","j9dK","9","FgT","E*6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)