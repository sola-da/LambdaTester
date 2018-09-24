





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = 6.244234168914842e+307
argument3['#R[+'] = 9.128629842797029e+307
return a-b-c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [0,157]
argument4[-100] = ""
base_1[1]['!cck7Mm'] = {"82":"@n!","618":"v)R(","783":4.982553613433854e+307,"1.2263821532984911e+308":"e2]","1.7976931348623157e+308":783,"":"","g":100,"1.2376546442884092e+308":607,"1.1887222313208602e+308":"w"}
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6.798098696036065e+307] = [705,460,122,122]
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1]['!cck7Mm']['g'] = 403
base_3['filter'] = "D"
argument7[4] = [100,823,460,460,893,655,893,823,655]
return a/b-c
};
var argument6 = true;
var base_0 = [0,49,122,0,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,122,0,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,122,0,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,122,0,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)