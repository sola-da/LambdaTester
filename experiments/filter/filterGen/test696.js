





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["J",627,"6_#Y",-100,460]
argument3[4] = "R"
base_0[1][2] = {"157":823,"460":1.4107081778750945e+308,"":25,"[":5e-324,"B":"","9.1389343283028e+307":1.0921586078282886e+308,"`":595,"1.7976931348623157e+308":"I","1.7842289659276945e+308":"E","BK=K":2.000338444168762e+307}
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"1.560722013865598e+308":"{"}
argument3[157] = [607,403,-1,59,655,126,25,893,1.7976931348623157e+308]
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = {"1.712352908816681e+308":"","1.0580953062210972e+307":"","7.647015250126845e+307":"x"}
argument5[1] = false
return a-b+c
};
var argument4 = [618,783,618,59,893,893,213,823,122];
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ["5"]
argument7[3.0481490052276395e+306] = {"":"","1.048527567888538e+308":"5q7","1.0174479986837876e+308":""}
argument7[1.7121211182125595e+308] = "ul"
return a-b-c
};
var base_0 = ["wS"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["wS"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["wS"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["wS"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)