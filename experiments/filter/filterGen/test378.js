





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = ""
base_0[3][0] = {"0":"","":2.6995921532013214e+307,"1.8737789527523484e+307":1.1741274363096973e+308}
base_0[0][4] = null
return a-b*c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"":1.408955961717351e+307,"1.3578730731287206e+308":3.684459506670406e+307}
argument5[2] = {"122":1.4221894611786458e+308,"":"n","1.7976931348623157e+308":"9B"}
return a/b*c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = {"7.591494736725798e+307":783,"-100":1.278007455719262e+308,"1.0586273388386606e+308":"","1.0230890806496375e+308":"yK","{z":"A*K!","1.4457469990960225e+308":6.281132745235113e+307,"":"=J"}
base_2 = null
return a+b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = 893
argument8[2] = null
return a-b*c
};
var argument8 = {"0":100};
var base_0 = ["7","5","M","<","f","O","#"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","5","M","<","f","O","#"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test378.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)