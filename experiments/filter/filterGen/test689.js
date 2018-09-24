





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = "NB7:"
argument2[0] = {"9":242,"59":823,"823":"","$oe":"","":"XTl","|":"","3.8433722021356276e+307":6.175294094174953e+306}
return a*b+c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.377960715099946e+307] = "s"
argument5[714] = true
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = "'"
base_2[6] = ""
base_2[0] = ""
return a-b+c
};
var argument6 = 1.1545414786732197e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['filter'] = {}
return a*b+c
};
var argument8 = "";
var argument9 = {"5":100,"126":"","":595,"uT":"","6(X":1.7976931348623157e+308,"-1":",j#,fhN@i","6.432968940604036e+307":82,"1.4617279561262926e+308":"#Ry","VO":783};
var base_0 = ["rdWS",843,59,122,"*&9#;l",100,607,"g","_z$rZMG(;"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rdWS",843,59,122,"*&9#;l",100,607,"g","_z$rZMG(;"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test689.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)