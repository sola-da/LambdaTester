





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"$":"n","":"","}jx":126}
argument2[3.0481490052276395e+306] = null
base_0[0][823] = [893,242]
return a*b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = [" ","9","Z>`B!","0","q","l","Sl"]
base_1[0][0] = ""
return a-b*c
};
var argument4 = 213;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4034744228995816e+308] = true
base_2[0][823] = false
return a+b+c
};
var argument6 = r_0;
var argument7 = ["pG!","?N,","e","1","dd4","a","Q3vH)",")9T#","[","L"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
return a*b-c
};
var base_0 = ["W","9*R@","]n","3",")","e","jO}oQ","L","i2"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","9*R@","]n","3",")","e","jO}oQ","L","i2"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","9*R@","]n","3",")","e","jO}oQ","L","i2"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","9*R@","]n","3",")","e","jO}oQ","L","i2"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test282.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)