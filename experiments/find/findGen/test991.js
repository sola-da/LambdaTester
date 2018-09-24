





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][0] = {"7":"d","843":1.6924504849152194e+308,"1.0329736804906227e+308":"","8.698357983957991e+307":"","5.017547343634745e+307":"Y",">":"","":1.9005113520302352e+307,"w!":783,"1.0316694522902816e+308":"g"}
return a/b-c
};
var argument2 = [627,59,627,126,893,157];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['AA@'] = [-1]
base_1[0][1] = null
return a-b-c
};
var argument4 = r_1;
var argument5 = {"0":82,"242":893,"1.2609855398263475e+308":8.627121569582395e+307,"1.4783197013956311e+308":595,"":"BRK5","-":9.587081576661149e+307,"2.7261464821984925e+307":"","1.2122064734361688e+308":"","i":"","7.334892422157402e+307":"?"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6.447566193969e+307] = "S"
return a/b/c
};
var argument7 = null;
var argument8 = {"1.0526092766166058e+308":2.1695718052933998e+307,"D%":""};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627] = "N_uY"
return a/b+c
};
var base_0 = [1.7976931348623157e+308,-100,122,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,-100,122,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,-100,122,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,-100,122,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test991.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)