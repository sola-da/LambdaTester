





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = true
argument3['AA@'] = {"25":"T","100":"","618":783,"714":"&","m":"cb'2M","_3d":"l","":"","-1":"","3O?_":"k"}
return a/b/c
};
var argument2 = [714,893,59];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = ""
return a+b*c
};
var argument4 = 59;
var argument5 = 157;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = ""
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = true
argument8[3][6] = null
argument9['W'] = {"618":"I"}
return a-b/c
};
var base_0 = [783,-100,893,705,100,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,-100,893,705,100,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,-100,893,705,100,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,-100,893,705,100,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test580.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)