





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['filter'] = true
base_0[8] = 25
argument3[1.7847438319683965e+308] = [242,893,460]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['A'] = 823
argument4[5.262931091360336e+307] = 1.6274813291527517e+308
base_1[1][2] = [213,655,122,893,0]
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = {"157":4.863904824489755e+307,"607":"","5.3049759833447e+307":"","":"T","F":100,"4.481809728856266e+307":"","8.963777920769399e+307":"Jn","1.6136163168131227e+308":"","T":1.2315753469081407e+308}
argument5[1.4034744228995816e+308] = ""
argument4['A'] = {}
return a+b-c
};
var argument4 = {"893":"","8.457843870507349e+307":""};
var argument5 = 969;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
argument8[1] = ""
argument7[4] = {"607":8.543016232654456e+307,"=S":"","aZ":9.331936155695767e+307,"":"","9.820335568369765e+307":"Rr1","1.7976931348623157e+308":""}
return a/b*c
};
var base_0 = [403,122,607,783,242,-1,-1,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,122,607,783,242,-1,-1,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,122,607,783,242,-1,-1,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,122,607,783,242,-1,-1,100]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test144.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)