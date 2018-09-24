





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"126":"","823":1.4743716464772147e+308,"`":1.2330050576969518e+308,"":"","j":"","*s]":1.7976931348623157e+308,"%#$H":"","c|":"","sb":25}
return a+b*c
};
var argument2 = null;
var argument3 = 1.339397082630662e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"5":6.051960320228408e+307,"823":"E","893":0,"3.597843849061993e+307":7.240019299149309e+307,"1.595054039104276e+307":"r","":100,"8.444544937135552e+307":893}
argument5[2] = 655
return a/b/c
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [49,460,5e-324,-1]
base_2[5] = null
return a/b*c
};
var argument8 = r_0;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3.3156198695370476e+307] = ""
return a-b/c
};
var argument11 = [783,823,460,122];
var argument12 = "";
var base_0 = ["3vmU","PlID","L","qD","m+R","n;","O","JJ","2"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3vmU","PlID","L","qD","m+R","n;","O","JJ","2"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3vmU","PlID","L","qD","m+R","n;","O","JJ","2"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3vmU","PlID","L","qD","m+R","n;","O","JJ","2"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test138.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)