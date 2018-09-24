





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.0546776681946723e+308] = true
argument3[1.7847438319683965e+308] = [823,823,705,607,-100,0,242,25,783,783]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"25":"","82":"6x2!q","618":"","":618,"Je":213,"7.674229675025789e+307":"","2.98355567831666e+307":"","C":1.5307902520203787e+307}
return a*b/c
};
var argument3 = true;
var argument4 = [714,655];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['h'] = null
argument6['c'] = {"59":"","969":"LvA=g","4.0673847146841377e+307":"r1","YFIW":"",":":6.871430215148735e+307,"":"","&Q@":"","-1":100,"Ei}U":"fn"}
return a*b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = {"1V":"","0{":1.3631700832102302e+308}
return a+b+c
};
var argument8 = r_3;
var argument9 = 7.877748812206278e+307;
var base_0 = [242,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)