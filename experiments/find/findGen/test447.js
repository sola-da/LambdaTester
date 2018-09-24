





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f-d'] = null
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['!j'] = null
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = null
argument3 = {"0":1.9251528254274836e+307,"82":460,"122":1.1933221992775175e+308,"843":1.2543099659773127e+308,"":8.287834436470298e+307,"9i":"","$":"","-1":",v","&":"","2.518661154018992e+307":""}
argument4[0] = [783,-1,"6Poh",893,893,"C",823,"t",59]
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = {"655":"n","705":"","714":",","843":"eYy",")":627,"`":"","1.2734875746174445e+308":"","1.6222010734533348e+308":4.677615837173398e+307}
return a+b-c
};
var argument5 = "";
var argument6 = {"126":157,"893":783,"6.337602264881729e+307":49};
var base_0 = [1.7976931348623157e+308,823,157,627,627,843,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,823,157,627,627,843,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,823,157,627,627,843,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,823,157,627,627,843,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)