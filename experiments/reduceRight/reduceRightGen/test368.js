





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = null
base_0[4] = 1.5338569280109944e+308
return a-b/c*d
};
var argument2 = "6";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = 7.838978601220123e+307
base_1[0] = {"655":"AOzM","":969,"`'e(x":2.1293722290408512e+307,"D:":"hj","F":"","7P":"","5e-324":"{"}
return a/b-c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.738403780925446e+308] = {"82":"","783":"","rK":"zRIei","":"","8.951188544594616e+307":"=","2.562308708193085e+307":"","8.762191822794114e+307":"_{","%":""}
argument8[0] = ["l","M","k"]
base_2[3] = ""
return a*b*c+d
};
var argument7 = "z";
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = [655,"4",843,705,"`h[","*","V",157,"*","j"]
base_3[0] = 595
return a+b/c+d
};
var argument10 = [403,0,"d)",1.7976931348623157e+308,49,"j",";Y","aA"];
var argument11 = true;
var base_0 = ["C","*n"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","*n"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","*n"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","*n"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test368.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)