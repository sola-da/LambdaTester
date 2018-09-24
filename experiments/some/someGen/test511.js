





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = null
return a*b*c
};
var argument2 = null;
var argument3 = {"213":"","705":"4(","783":1.503184566826902e+307,",b":4.502982926170621e+307,"":"","qZopDsEI":"N","4.522243008923084e+307":607,"6.668811690329014e+307":1.0904421697781911e+308};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][3] = null
return a-b+c
};
var argument5 = 1.0074731798360582e+308;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = "%"
argument8[1.6798476101238045e+308] = {"1.7976931348623157e+308":"`]","":"","r":""}
argument8[3] = {"T":157,"]":"5)PrV","1.0546776681946723e+308":"","":"kAW"}
return a+b+c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
argument9[3] = null
argument10[3][3] = true
return a/b+c
};
var argument10 = r_2;
var base_0 = ["6_","Wut"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6_","Wut"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6_","Wut"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6_","Wut"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test511.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)