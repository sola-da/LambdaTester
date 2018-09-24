





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = ""
return a/b/c
};
var argument2 = {"82":0,"627":"G","6.251596105982636e+307":3.692439681424867e+307,"6.656782642201471e+307":"}iPr","":-100,"-1":1.0984300492246751e+308,"+":""};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = false
base_1[0] = 1.26482082133463e+307
base_1 = {"595":"","607":"{:","1.0500354979187844e+308":0,"O":"","2M":0,"4{V":100}
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"126":"(","":460,"1.5239481624888176e+308":"","V":783,"9.474061555027644e+307":1.237589637788156e+308,"6.919932464016283e+307":"","6.116966833055024e+307":"?y|"}
return a/b*c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = false
base_3[6] = ["U","x7x"]
base_3[9] = {"122":"1","627":"","":"","-1":-1,"i":"","1.6843102169771425e+308":""}
return a+b+c
};
var argument8 = null;
var base_0 = ["@","U[=","mD)E*","#","QROy","t"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@","U[=","mD)E*","#","QROy","t"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
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
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test21.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)