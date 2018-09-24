





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = {"59":"","403":100}
base_0[4] = {"59":1.2936085081708167e+308,"H0:":"","[-":607,"h":1.6833750687437893e+308,"5.940770849994226e+307":"","1.260001705406488e+308":6.224099510040146e+307,"wQq+b;(1R":"^K%^","7.344511317942094e+307":":0m","":705,"l":4.620451375284393e+307}
argument3[7] = ""
return a+b*c+d
};
var argument2 = 969;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"0":"","157":"","783":"","a8r[":100,"":8.985211469954258e+307,"e":1.3266549643863434e+308,"1.609748895695872e+307":",?kJ!","@":5e-324,"2.3294142448073667e+307":""}
base_1[0] = null
return a+b*c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = ""
return a+b+c/d
};
var argument5 = 1.537441203217906e+306;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.8120440085202614e+307] = {"9.352423265288652e+307":"","1.2611758860921895e+307":"HNZ","5.22099919196133e+307":969,"":4.14245304281182e+307,"1.5212530297100392e+308":7.200870704539232e+307}
return a*b-c-d
};
var base_0 = ["If","g","w","`","{C",">p","n1"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["If","g","w","`","{C",">p","n1"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["If","g","w","`","{C",">p","n1"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["If","g","w","`","{C",">p","n1"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test822.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)