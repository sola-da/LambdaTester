





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5.062647675476955e+307] = "5"
argument2['$*I'] = 126
base_0[8] = 213
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "D9"
argument4[1] = "d0*"
argument5[49] = true
return a*b-c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = true
argument6[2] = [460,893,126,213,-1,59,969,705]
argument7[2] = {"157":5e-324,"":"","Ii;{":"","2.053887876220243e+307":"OG","1.027411442931998e+308":""}
return a-b/c
};
var argument6 = null;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = {"6":1.391619640772449e+308,"705":9.314787576532998e+307,"5+2":"","":213,"7.35979540129123e+307":"xf5","4.825056932264431e+307":126,"1.099644178889292e+308":7.466370439918122e+307,"3uTy":"y"}
argument9[1.2421645642809447e+308] = "^"
return a+b-c
};
var argument9 = true;
var base_0 = [893,783,607,893,627,893,893,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,607,893,627,893,893,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,607,893,627,893,893,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,607,893,627,893,893,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test830.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)