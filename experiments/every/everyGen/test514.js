





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = "@"
argument2[1] = ""
return a+b*c
};
var argument2 = ">sdk";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = ["B","[,","4","D"]
base_1[2] = 49
return a+b*c
};
var argument4 = null;
var argument5 = ["&","?","6c","(+","0Z","*","C&"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = ""
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = 1.7976931348623157e+308
base_3[0][0] = null
return a*b-c
};
var argument8 = {"82":"K","714":"","":"","1.7976931348623157e+308":"","j":"V","1.1331620450978138e+308":705,"6.317126120284112e+307":3.538743823896459e+307,"|":6.11575817602354e+307};
var base_0 = [595,0,59,893,-1,655,655,59,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,0,59,893,-1,655,655,59,59]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,0,59,893,-1,655,655,59,59]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,0,59,893,-1,655,655,59,59]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test514.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)