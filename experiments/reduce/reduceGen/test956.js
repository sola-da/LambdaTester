





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['(R'] = ["AO",",","r","3"]
return a*b-c+d
};
var argument2 = true;
var argument3 = "b";
var argument4 = "";
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [714,"R8MY","y","XR"]
argument4[627] = null
argument5[5] = false
return a-b*c+d
};
var argument7 = 126;
var argument8 = {"25":"","59":"7","893":":kWM","1.3255245496838687e+308":1.6173421952289038e+308,"9.769670611293725e+307":122,"":"","!":"","Lu":"","8.276378655935267e+307":""};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = ["p"]
return a-b*c*d
};
var argument11 = r_2;
var argument12 = [122,"Y",122,403," X`","$","yT7",213,"?Ll"];
var argument13 = r_2;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[-1] = {"82":100,"595":"","618":5.144714620830326e+306,"893":1.2514263741956232e+308,"1.779373416040709e+308":7.510012245714002e+307,"1.3381012347674068e+308":1.2830133386382596e+308,"fD'":8.775883675797156e+307,"w":"Wi","-1":595,"1.750699825018316e+307":3.498056393247725e+307}
base_3[8] = null
return a-b-c/d
};
var base_0 = [655,403,25,595,843,618,783,969,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,403,25,595,843,618,783,969,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,403,25,595,843,618,783,969,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,403,25,595,843,618,783,969,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)