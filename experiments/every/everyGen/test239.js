





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = {"":"GdN","4.592011325091412e+307":1.487414851246735e+308}
argument2[3.3156198695370476e+307] = null
base_0[0][1] = null
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = ""
argument4[2] = [")O","h{qnx","{$p`T","?","t"]
base_1[7] = null
return a/b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 8.436021770004724e+307
base_2[0] = null
return a+b*c
};
var argument5 = null;
var argument6 = "*o!O+C}x#[cR!";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"618":"A","655":1.1157747159989846e+308,"-100":"","W":783,"Z":7.058289023116138e+307,"4.4899029456007164e+307":"rR'z^","n(:":3.4429645317548083e+307}
base_3[0][6] = null
base_3['length'] = null
return a/b-c
};
var argument8 = true;
var argument9 = [714,823,705,59,0];
var base_0 = ["$","=","u","U","M","J2","P","]","M"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","=","u","U","M","J2","P","]","M"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","=","u","U","M","J2","P","]","M"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","=","u","U","M","J2","P","]","M"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)