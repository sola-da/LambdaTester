





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = [655]
base_0[1] = ["B","[,","4","D"]
base_0[4] = 49
return a+b/c
};
var argument2 = null;
var argument3 = ["&","?","6c","(+","0Z","*","C&"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5][1] = ""
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = 1.7976931348623157e+308
base_2[5][0] = null
return a*b-c
};
var argument6 = {"82":"K","714":"","":"","1.7976931348623157e+308":"","j":"V","1.1331620450978138e+308":705,"6.317126120284112e+307":3.538743823896459e+307,"|":6.11575817602354e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[618] = [122,783,213,82,1.7976931348623157e+308,82,627,100]
base_3[0] = false
base_3[1][8] = "V"
return a/b*c
};
var base_0 = [25,595,403,126,607,595]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,595,403,126,607,595]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,595,403,126,607,595]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,595,403,126,607,595]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test515.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)