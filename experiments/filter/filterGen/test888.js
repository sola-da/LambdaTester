





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.82874486699946e+307] = "Dd"
argument3[3] = [627,627,843,627]
argument2[8] = "_"
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = "bw"
return a-b+c
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = {"1":"3p","":0,"1.3441115938125296e+308":627,"6.910862809860597e+307":1.0345969755508728e+308,"1.1094840744342195e+308":1.7683647073136543e+308}
argument6['jo'] = false
argument6 = ""
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = [59,618,-100,242,122]
argument8[7] = [595,126,82,969,25,242]
argument7['K'] = {"893":3.118098148740354e+307,"":618}
return a-b*c
};
var argument7 = null;
var argument8 = r_2;
var base_0 = [823,1.7976931348623157e+308,0,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,1.7976931348623157e+308,0,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,1.7976931348623157e+308,0,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,1.7976931348623157e+308,0,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test888.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)