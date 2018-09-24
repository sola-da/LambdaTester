





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['{X'] = 607
argument2[705] = {"59":5.979893016268367e+307,"627":"T","":"f"}
argument3[4] = null
return a*b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][8] = "<"
argument4[9] = null
return a*b/c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"":1.408955961717351e+307,"1.3578730731287206e+308":3.684459506670406e+307}
argument7['_W'] = {"122":1.4221894611786458e+308,"":"n","1.7976931348623157e+308":"9B"}
return a/b*c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"7.591494736725798e+307":783,"-100":1.278007455719262e+308,"1.0586273388386606e+308":"","1.0230890806496375e+308":"yK","{z":"A*K!","1.4457469990960225e+308":6.281132745235113e+307,"":"=J"}
base_3 = null
return a+b+c
};
var base_0 = ["twtu$-","c=t","5","M"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["twtu$-","c=t","5","M"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["twtu$-","c=t","5","M"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["twtu$-","c=t","5","M"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test380.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)