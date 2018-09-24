





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 1.6238134442741093e+308
base_0[1][0] = {"49":242,"843":3.50775313451604e+305,"":"K","1.1508981221717804e+307":4.907138319665248e+307,"q9m":595,"(":"K","3.023116731560942e+307":"R@","6.291951990783069e+306":6.84436757783497e+306,"1.1823728225259848e+308":157}
return a*b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = ["$4x","k,","y","r+^"]
argument5[5] = {"969":122,"1.7737836379221011e+307":"Ng","7.232930364299541e+307":"|tD"}
return a+b-c
};
var argument5 = r_0;
var argument6 = 1.7585699778112112e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
base_2[4] = null
base_2 = {";":"","":""}
return a+b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = {"157":0,"595":122,"618":"m*","":"","I":"","-b%8LQ":122}
base_3[1][2] = null
return a*b*c
};
var argument9 = r_3;
var base_0 = ["su",157,"y59]0&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["su",157,"y59]0&"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["su",157,"y59]0&"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["su",157,"y59]0&"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)