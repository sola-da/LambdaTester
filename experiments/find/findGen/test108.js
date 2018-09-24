





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"":"o","1.1112047124878478e+308":"","8.532219297782195e+307":122,"3.083910988293413e+306":0}
return a+b/c
};
var argument2 = -100;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = null
argument4[1.399309004356655e+308] = "2"
argument5[0] = 460
return a/b-c
};
var argument4 = [1.7976931348623157e+308,25,126,82,5e-324,126,122];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0500354979187844e+308] = {"1":"9","157":969,"595":"","":1.6673389497277373e+308,"1.5887132598818247e+308":783,"1.1865901479716535e+308":1.258109991298427e+308}
argument6[0] = {"9":"G","213":2.960730553232072e+307,"":627,"e":7.651563764122467e+307}
return a+b+c
};
var argument6 = true;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = {"783":1.796354570994444e+308,"":"-8",";":8.450737482408466e+307}
return a/b-c
};
var base_0 = [607,460,-1,783,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,460,-1,783,627]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,460,-1,783,627]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,460,-1,783,627]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test108.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)