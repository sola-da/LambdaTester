





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = [714,-1,-100,595,242,25]
argument2[893] = false
return a+b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = {"618":82,"2.006044368909887e+306":3.570753637458403e+307,"1.7385043561671046e+308":"","":">","b":"","1.6432652571034255e+308":1.7142051397504965e+307,"R":"d^","6.92041497721512e+307":"M","1.2306189149315376e+308":""}
base_1[4] = null
return a-b+c
};
var argument4 = 3.8697564153620325e+307;
var argument5 = 3.0544327860550863e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = null
return a*b/c
};
var argument7 = "";
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = false
return a/b/c
};
var argument10 = false;
var base_0 = [-1,783,242,403,122,25]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,783,242,403,122,25]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,783,242,403,122,25]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,783,242,403,122,25]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test996.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)