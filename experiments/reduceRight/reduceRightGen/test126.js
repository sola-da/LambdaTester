





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"j":"x","1.061905666768637e+307":"o96","1.6299232716578403e+308":""}
base_0 = ["a",100]
return a*b/c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['{S'] = "`Oug"
argument4[0] = null
argument4[1] = {"1.1070567354341033e+307":"NJ","O":9.911372113423141e+307,"6.1435495638228e+307":5.331598633004861e+307,"":"","'":460,"1c":4.968827633742659e+307}
return a+b-c/d
};
var argument3 = 8.867095687250584e+307;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = {"595":"","705":122,"893":1.4934708311493006e+308,"969":607,"":1.134647584581179e+307,"v":"2@(","1.071423274217265e+308":"FK]","-1":"","L":"LD"}
argument6['{S'] = false
return a/b-c/d
};
var argument6 = r_2;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"823":"n`","9.731670291840328e+307":-1,"1.1705882245452176e+308":8.195430350352284e+307,"1.3064412294633565e+308":""}
return a*b+c-d
};
var argument9 = false;
var base_0 = [82,607,100,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,607,100,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,607,100,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,607,100,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)