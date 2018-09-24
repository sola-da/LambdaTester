





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = {"%U<":"","1.6438243506233813e+308":"","y":-100,"":"iB","+4":"Z(","b":"","@":"","3.9337595751185645e+307":"V","1.1047149918025306e+308":1.0585352962677962e+308}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = false
argument3[-1] = [-100,0,460,705,969,25,242,823,-1]
base_1[4] = null
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = true
base_2 = ""
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = null
base_3[3] = {"655":1.4273966709707833e+308,"M":1.3589504615803647e+308,"6.376320929197819e+307":"w","1.6958996002560173e+308":1.2725379864036747e+308,"1.0549707677152616e+308":"my ","y":893}
return a+b-c
};
var base_0 = ["V",49,0,"_","16","-:",82,0,126,"9"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V",49,0,"_","16","-:",82,0,126,"9"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V",49,0,"_","16","-:",82,0,126,"9"]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V",49,0,"_","16","-:",82,0,126,"9"]
var r_3= undefined
try {
r_3 = base_3.find(argument4)
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
require("fs").writeFileSync("./experiments/find/findGen/test53.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)