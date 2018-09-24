





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = ""
return a-b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = true
argument5[3] = null
return a*b-c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.6706143966770798e+306] = false
base_2[0][6] = 823
argument8[2] = {"595":1.3984472932754039e+308,"705":655,"Mg3B7j":1.4479047415466848e+308,"":"=S?3B","1.1096366359901752e+307":"p$o","k":"{","T^8":"","7.827818656902757e+307":"k%","F":843}
return a/b+c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = "0"
argument10[122] = 607
argument9['g]'] = [213,49,969,893,-1,0]
return a/b-c
};
var argument9 = "Z";
var base_0 = [893,0,242,627,1.7976931348623157e+308,607,100,0,627,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,0,242,627,1.7976931348623157e+308,607,100,0,627,714]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,0,242,627,1.7976931348623157e+308,607,100,0,627,714]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,0,242,627,1.7976931348623157e+308,607,100,0,627,714]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)