





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.3156198695370476e+307] = false
argument2[3.3156198695370476e+307] = ["*L",242,783]
base_0[0] = 1.7903050586970813e+308
return a+b-c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = "un"
base_1[4] = ["?","g","|","rg"]
base_1[4] = ""
return a/b*c
};
var argument5 = false;
var argument6 = 3.381101930114136e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = false
base_2[8] = 3.189292394717863e+307
base_2 = [823,59,403,122,714,1.7976931348623157e+308,403,-1,1.7976931348623157e+308]
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = 705
base_3[5] = 6.027004082942505e+307
argument10 = {"":1.0555583009664232e+307,"1.6122823333188358e+308":"g","K":"","q":"","%":1.6032298315810952e+308,"Y":1.0682030165965163e+308,"1.1073410092684749e+308":1.2871558233328808e+308,"1.6975638337464941e+308":"","wIs":783}
return a/b*c
};
var argument9 = r_0;
var argument10 = false;
var base_0 = [0,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,122]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,122]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,122]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)