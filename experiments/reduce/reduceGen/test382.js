





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = 3.1158022423401144e+307
argument2[5] = {"25":"o","460":7.287745161047271e+307,"1.7976931348623157e+308":969,"":3.0061980999903417e+307,"ap":0,"1.0621389860002568e+308":157,"5.681901281774796e+307":1.0182273387205832e+308}
return a/b*c*d
};
var argument2 = false;
var argument3 = false;
var argument4 = true;
var argument5 = [783,783,783,-1,714,1.7976931348623157e+308,969,242,157,783];
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = [5e-324,460,607,607,82,627,82,705]
argument5[627] = "P"
return a+b/c/d
};
var argument8 = "";
var argument9 = ["d","j","a","o","5"];
var argument10 = {"618":1.7532688078157843e+308,"3.197945098696471e+307":"","":"","5.52773882592083e+307":"Gh5","T#pe":1.1493818097039133e+308,"EGr":"","1.1469145193819313e+308":1.3153215326313581e+308,"1.3497333429174124e+308":157};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[82] = false
return a*b*c*d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[8] = {"82":403,"1.7976931348623157e+308":1.184316037476196e+308}
argument13[3] = -100
return a*b*c*d
};
var argument13 = null;
var base_0 = ["x","]T",";"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x","]T",";"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x","]T",";"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x","]T",";"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)