





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = false
argument3 = {"0":-100,"607":"","2.2536728476945566e+307":"w","":"","-1":1.5359879880456342e+308,"9.52948378751779e+307":"","1.642370712172105e+308":5e-324,"1.630533634636979e+308":"N7"}
return a-b/c-d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [655,403,0,783,714,823,-100]
base_1[8] = {"5":7.805359096227622e+307,"t]":"[","8.651182508196047e+307":655,"1.1541351192563833e+308":"","2.221481937395013e+306":"wo|","":1.5681827956050115e+308,"3.8336718024701674e+307":"W"}
return a-b/c+d
};
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"3":-100,"122":"","1.0361458382940152e+308":"+","":655,",`":0,"c":4.1776460837663443e+307}
argument7[6] = 783
return a*b-c/d
};
var argument6 = 618;
var argument7 = [655,607,607];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = false
return a-b-c*d
};
var base_0 = [714,893,893,242,969,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,893,893,242,969,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,893,893,242,969,0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,893,893,242,969,0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test27.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)