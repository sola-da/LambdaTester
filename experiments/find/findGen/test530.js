





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AA@'] = ""
base_0 = null
argument2[0] = true
return a-b+c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1881593224845412e+308] = ""
return a-b/c
};
var argument5 = false;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.399309004356655e+308] = false
argument9[969] = 893
argument9['AA@'] = null
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[25] = {"783":"","":1.058434765454531e+308,"&":""}
argument9[25] = ""
argument8[5] = null
return a*b/c
};
var argument9 = {"618":"","1.4686809774714144e+308":"g","r*":"","MHv|":607,"":4.1508926993894325e+307,"L[":1.313480652588704e+308,"1.4304418483500828e+308":"","A>d":1.4758521457142e+308,"1.4189493258114735e+308":82,"k":""};
var argument10 = null;
var base_0 = ["Ee","?G","jW","56","9E-",">j"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ee","?G","jW","56","9E-",">j"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ee","?G","jW","56","9E-",">j"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ee","?G","jW","56","9E-",">j"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test530.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)