





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = false
argument3[2.4183178393969103e+306] = 7.017517328969892e+306
return a*b-c
};
var argument2 = null;
var argument3 = "*";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = null
argument5[1.6706143966770798e+306] = true
argument5[8] = [1.7976931348623157e+308,403,25,49,618,25,-1,213]
return a-b-c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = 49
argument8[3] = {"607":1.0249373245685668e+308,"":"",")y":618,"1.3569266439525626e+308":""}
argument7[3.3156198695370476e+307] = 242
return a-b*c
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"25":"","":1.446599587843303e+308,"1.653879630867753e+308":"y","q":607}
argument10[4] = 2.2363712180826308e+306
argument10 = true
return a+b*c
};
var argument10 = r_2;
var argument11 = 100;
var base_0 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test674.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)