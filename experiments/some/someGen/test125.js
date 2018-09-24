





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5e-324] = "y=l90e"
base_0[3] = [1.7976931348623157e+308,627,595,627,595,655,705,403,595,82]
base_0[9] = {"59":1.497695067848585e+307,"893":1.563613680792086e+308,"P8lMW":"1","n":"","":"[s]","1.1390026075969528e+308":2.7269152339667726e+307,"f":1.6822237273415877e+308,"-1":""}
return a-b-c
};
var argument2 = 122;
var argument3 = ["=6<>",403,"k","G","6",">",213,"GCoE"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = "3a{"
base_1[1][8] = null
return a+b+c
};
var argument5 = 403;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
return a-b-c
};
var argument7 = true;
var argument8 = [1.7976931348623157e+308,122,823,893,1.7976931348623157e+308,607,618];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = null
return a+b*c
};
var argument10 = true;
var argument11 = {"242":""};
var base_0 = [213,25,783,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,25,783,122]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,25,783,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,25,783,122]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test125.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)