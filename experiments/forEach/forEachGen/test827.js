





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[49] = {"49":627,"213":-100,"595":"Wd","969":5.827469939524817e+306,"7.220495507530661e+307":9.583401025027396e+307,"":1.0900624788148185e+307,"-N":"+L","1.6618817868146328e+308":"Pk","-":""}
argument2['wIs'] = null
argument3 = false
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = {"1.6599174018639555e+308":705,"1.4785663458543636e+307":"","":";","2.5350900260947165e+307":""}
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = {"893":"","":""}
argument5[49] = {"$@":"","":"","S'z":213,"1.5838780771944055e+308":"("}
argument4[1.4570946481947045e+308] = [893,843,893,627,"L",49,627]
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"25":""}
argument5 = [100,403,242]
argument6[3] = ["_3",25,627]
return a/b/c
};
var argument5 = true;
var argument6 = true;
var base_0 = [595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)