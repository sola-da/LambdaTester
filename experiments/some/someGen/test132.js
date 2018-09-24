





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = 607
base_0[1][3] = {"157":122,"213":"","1.0213037678442021e+308":1.1143805735126662e+306,"":122,"5.768198424970195e+307":4.2621328578780377e+307,",U":"","5.363145681208597e+307":607,"R!":1.3012111342136087e+308,"1.2238933131852547e+308":""}
argument2[4] = {"126":"P","l-":""}
return a+b+c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 1.2026551820356406e+308
return a+b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = null
argument8[5] = {"59":82,"100":"e","1.2665491745017196e+308":"K@","Gs8 ":7.86670743446777e+306,"1.1352101087511812e+308":"","":122,"5.76076838714538e+307":1.1212006659341165e+308}
base_3[0] = null
return a*b*c
};
var argument8 = true;
var argument9 = null;
var base_0 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test132.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)