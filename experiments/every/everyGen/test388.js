





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"213":1.661040266209613e+308,"":122,"1.0511882739827518e+308":1.330170949644151e+308,"8.843425147784419e+306":"","6.930186636440255e+307":"","w":"","oX":"2kz:$"}
return a-b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = "yY"
argument5[122] = {"460":1.460625521149995e+308,"627":49,"$1":100,"":6.277379982368375e+307,"1.396436124444942e+308":1.0029598103588784e+308,">pvL":49,"3.9285960188693716e+307":843,"=:+kFe":")y9Y","1.7976931348623157e+308":100}
argument3[2] = false
return a+b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = 5.661604313362176e+307
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ""
argument8[2] = 969
return a/b/c
};
var argument7 = r_0;
var argument8 = r_0;
var base_0 = [213,25,100,705,25,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,25,100,705,25,893]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,25,100,705,25,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,25,100,705,25,893]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test388.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)