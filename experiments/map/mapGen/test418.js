





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[714] = 1.7976931348623157e+308
base_0[3] = 1.7891286214874532e+308
return a*b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = {"":"","Q":9.962450969920737e+307}
base_1[0][1.4677087964888306e+308] = false
argument5[1] = 714
return a+b/c
};
var argument4 = 8.941831555179654e+306;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = true
return a/b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = null
argument7[49] = [893,893,655,655]
return a/b*c
};
var argument7 = r_0;
var argument8 = ["JG",";","u","9_Jd","h","e^^","O","03]d[","17"];
var base_0 = [5e-324,"GMM@",705,"ed","cN",242,25,"`&",49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"GMM@",705,"ed","cN",242,25,"`&",49]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,"GMM@",705,"ed","cN",242,25,"`&",49]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"GMM@",705,"ed","cN",242,25,"`&",49]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test418.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)