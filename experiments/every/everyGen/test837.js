





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = true
return a+b*c
};
var argument2 = 59;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.3156198695370476e+307] = null
argument5[4] = true
argument4[122] = null
return a+b+c
};
var argument4 = true;
var argument5 = 3.616950486962761e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = null
argument8[8] = false
argument7['io'] = {"607":"","":655,"1.014470064063603e+308":9.05655961632288e+307,"C":213}
return a+b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"1.2169959034319736e+308":1.4781653260810665e+308,"sEz":783,"v(:]qM?":"","":"","]":"","1.105117029988344e+308":1.1492803447486906e+308}
base_3[3] = null
return a+b*c
};
var argument8 = null;
var base_0 = [969,607,157,1.7976931348623157e+308,714,783,783]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,607,157,1.7976931348623157e+308,714,783,783]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,607,157,1.7976931348623157e+308,714,783,783]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,607,157,1.7976931348623157e+308,714,783,783]
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
require("fs").writeFileSync("./experiments/every/everyGen/test837.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)