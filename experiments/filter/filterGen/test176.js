





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = {"1.2726955088556167e+308":1.051715050559809e+308,"":"l''","w":"","7.565337673482484e+307":"`mUA","3.634788422839765e+307":1.2293960853138824e+308,"1.1810375657549696e+308":1.692955240030698e+308,"n":595}
argument2[714] = null
argument3[0] = ""
return a/b+c
};
var argument2 = 5.114793459811063e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = "ib"
base_1[4][7] = [1.7976931348623157e+308,126,618,655,1.7976931348623157e+308,49,705,1.7976931348623157e+308]
argument5[1] = {"0":"","100":823,"8.077742874191414e+307":"","4.580911531578366e+307":"}>","$":"","ZW":9.086082056082709e+306,"9.910114618636142e+307":1.239315699495906e+308}
return a/b/c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ""
return a*b+c
};
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[714] = ""
base_3[4] = null
argument11[1.4034744228995816e+308] = true
return a-b/c
};
var argument10 = true;
var base_0 = [242,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test176.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)