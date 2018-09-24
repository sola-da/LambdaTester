





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1][4] = null
return a/b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [1.7976931348623157e+308,"RQ","W",893,25]
return a/b/c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = [705,157,59,82,242,705]
return a-b*c+d
};
var argument4 = r_0;
var argument5 = r_2;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 627
argument7[8.575765443877852e+307] = {"595":3.279342313179733e+307,"":"J}","1.4205726959827606e+308":"","V":100,"?e":"`","9.75203236036492e+307":627,"9.59283185992692e+307":3.3321258186591897e+307}
argument7[3.286160553564105e+307] = [100,843,893]
return a+b/c/d
};
var argument7 = {"122":1.152876219314558e+307,"595":"p","618":"","5.405650246952626e+307":",","!":5.517177908874089e+307,"":"'j]","1.1224021160024986e+308":126,"j":1.733810540770148e+308,"1.4999053356087992e+307":",B"};
var base_0 = [157,122,49,49,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,122,49,49,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,122,49,49,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,122,49,49,893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test949.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)