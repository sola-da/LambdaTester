





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][5e-324] = 1.5490249364577762e+307
argument2[3.0481490052276395e+306] = [-100,"a=I",893,"TN",714,627,"a","Ai"]
return a-b/c
};
var argument2 = "";
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = {"0":"WPG","82":"","213":4.21486649171757e+307,"4.507252229605276e+307":"RY","Tk":"","U":"MLx{","9.876632004293613e+307":595,"5.024524815253774e+306":"{","":213}
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {"49":"4X","59":"C)Z","82":1.7585840927924631e+308,"100":"","893":4.9809123135093974e+306,"1.4752705424416481e+308":"_","1.021604671304674e+308":1.005353556549177e+308,"1.2981965569233835e+307":5.827203115547258e+306,"":"n"}
return a*b-c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
argument9[-100] = "f"
return a-b/c
};
var argument8 = true;
var base_0 = [783,403]
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
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterGen/test347.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)