





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = 1.1668777140145447e+308
return a+b*c/d
};
var argument5 = false;
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = true
argument7[90] = {"25":"","122":"c","783":122,"823":7.730846957707493e+306,"Y":0,"":1.575420641809131e+308,"n#":783,"3.8665452583436405e+307":"","1.005584044204624e+308":9.329286572356196e+307}
return a*b-c-d
};
var argument9 = 4.4505498188102247e+307;
var argument10 = 5.470840472084271e+307;
var argument11 = [126,714,705,705];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = false
argument11['HMm'] = {"49":1.0854728576369651e+308,"595":"","655":""}
argument10[';N'] = [0,1.7976931348623157e+308,-100]
return a-b+c-d
};
var argument13 = r_1;
var argument14 = true;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['s'] = {"0":1.0573177766778933e+308,"3":1.5960656368878238e+308,"1.4736931480489801e+308":213,"b":126,"6.760750376353515e+307":0,"1.0228525792126505e+308":783,"7.782197912704787e+307":"tQ{"}
argument14[403] = [49,714,823]
return a+b+c/d
};
var base_0 = [213,-1,607,213,213,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,-1,607,213,213,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,-1,607,213,213,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,-1,607,213,213,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test747.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)