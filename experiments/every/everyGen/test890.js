





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = null
argument2[3.3156198695370476e+307] = [49,82,403,783,607,714,49,823]
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = "r"
return a/b-c
};
var argument4 = [157,126,618,5e-324,705,100];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 100
return a/b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = [-1,607,"_","*","F","w",213,714]
base_3[9] = null
argument8['io'] = [126,"O",595,122,242,893,893,969]
return a/b*c
};
var argument8 = {"0":"]d","126":"","213":4.809318917038227e+307,"607":"?","714":-100,"969":893,"":460,"i":1.3835548322074944e+308," ":126};
var base_0 = [25,705,783,843,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,705,783,843,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,705,783,843,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,705,783,843,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test890.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)