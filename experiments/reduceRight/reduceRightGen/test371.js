





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ["F"]
base_0 = null
return a+b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['!j'] = null
base_1[1] = true
argument3[3] = {"460":"","705":"*!Q","893":"R|GJ","-1":"B;S","":1.1286026536380947e+307,"1.3560890698197659e+308":"","[":"#I{g","cboL":705}
return a/b*c/d
};
var argument3 = [403,126,893,49,126,893,893,100];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = ""
argument5['{S'] = null
return a-b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.575765443877852e+307] = true
argument6[25] = "&"
argument7[5] = {"25":"|","":1.1057125282085922e+307,"1.0356160915172718e+308":"","g{+|":4.2008371116378156e+307,"1.2923497041701724e+308":4.683527225590161e+307,"1.5537421725364437e+308":"","1.4390455340068303e+308":460,"1.7976931348623157e+308":242,"1.36975329464445e+308":"!("}
return a*b*c/d
};
var argument6 = null;
var argument7 = r_3;
var base_0 = [25,59,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)