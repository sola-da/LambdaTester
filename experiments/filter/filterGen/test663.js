





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = ["2","s:M","s","DV","N2B"]
argument3[1.4034744228995816e+308] = 1.5755272315304193e+308
argument3[618] = ["b_","g","+v","Xlg","1","r","e"]
return a/b/c
};
var argument2 = 1.0662135404819463e+308;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = {"213":4.4254477677361324e+307,"":1.7976931348623157e+308,"1.5389882779598108e+308":""}
return a-b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['filter'] = 1.0874337994808187e+307
argument7[-1] = false
return a+b+c
};
var argument7 = {"893":1.2379249348774423e+308,"3.065058766852288e+307":3.474186647499235e+307,"":"","^":"","eY":"","n)Ni":2.843434824953765e+307,"9.63859300844463e+307":1.5636636120578772e+308};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3.7154103611117224e+307] = true
argument11[2] = "nN$Z"
return a+b-c
};
var argument10 = false;
var argument11 = 25;
var base_0 = ["W","e","UoSej","3","q","gP",")j?","G7p*"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","e","UoSej","3","q","gP",")j?","G7p*"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","e","UoSej","3","q","gP",")j?","G7p*"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test663.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)