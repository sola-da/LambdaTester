





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
argument3['UU'] = ""
argument2[3.8120440085202614e+307] = ["a",">?q("]
return a*b/c+d
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = 5e-324
return a*b/c-d
};
var argument5 = [893,783,126,100];
var argument6 = {"7":"d","843":1.6924504849152194e+308,"1.0329736804906227e+308":"","8.698357983957991e+307":"","5.017547343634745e+307":"Y",">":"","":1.9005113520302352e+307,"w!":783,"1.0316694522902816e+308":"g"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2] = ""
argument8['F2nCX>6'] = 6.708363811444598e+307
return a/b-c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-1] = {"82":1.2609855398263475e+308,"595":"","893":1.4783197013956311e+308,"-1":"","8.627121569582395e+307":242,"":7.334892422157402e+307,"9.587081576661149e+307":2.7261464821984925e+307,"BRK5":"i","?":")","1.5122870774442054e+308":82}
return a+b/c-d
};
var argument9 = null;
var argument10 = [607,969,25,969,627,655,655,213,0,893];
var base_0 = [607,157,82,-100,823,655,607,242,157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,157,82,-100,823,655,607,242,157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,157,82,-100,823,655,607,242,157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,157,82,-100,823,655,607,242,157]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test981.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)