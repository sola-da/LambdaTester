





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"1.2726955088556167e+308":1.051715050559809e+308,"":"l''","w":"","7.565337673482484e+307":"`mUA","3.634788422839765e+307":1.2293960853138824e+308,"1.1810375657549696e+308":1.692955240030698e+308,"n":595}
base_0[6][4] = null
argument2[3] = ""
return a/b+c
};
var argument2 = 5.114793459811063e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[460] = "ib"
base_1[6][4] = ["R","f","H","+"]
return a/b/c
};
var argument4 = ["}>","W","d"];
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = "#S"
base_2[5] = ["0Q","u","NA","?","kH","@u","qsno"]
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = {">":1.2406584599324655e+308}
base_3[6] = ""
return a+b+c
};
var argument8 = "%[";
var base_0 = [242,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,100]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test172.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)