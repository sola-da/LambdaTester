





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 8.752508704411762e+307
base_0 = "jw"
return a*b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = ["8","&Hfw","s","NX","?","8jY","1"]
return a+b+c*d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"595":1.3595908850281993e+308,"":"","1.0750304475033423e+308":4.2700030228200026e+307}
argument5[8.575765443877852e+307] = {"y":"]","2.8289447527687153e+307":"","f":1.390769337257875e+308,"9.110940781185072e+307":655,"6.513985067957521e+307":"","1.3868482002363636e+308":"","":"","Crw":607,"|}":1.410116313580885e+307,"I":""}
return a-b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"122":"","627":2.929583238354602e+307,"783":"","969":5.497395289006886e+307,"F<":1.1783411617153941e+308,"-e":823,"1.0757326531385775e+307":655,"7.600488097153e+307":618}
argument6[2] = null
base_3[0] = null
return a/b+c-d
};
var argument6 = "";
var base_0 = ["n4m","?","oE`","A"," ","RlW",",x","v"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n4m","?","oE`","A"," ","RlW",",x","v"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n4m","?","oE`","A"," ","RlW",",x","v"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n4m","?","oE`","A"," ","RlW",",x","v"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test124.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)