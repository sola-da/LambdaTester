





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
base_0[6] = {"59":"F","157":607,"242":1.7976931348623157e+308,"969":"ue0","":"","-100":"C","1.6705773023836703e+308":403,"F":7.736091680605982e+307,"9.5578965971822e+307":""}
argument2[1.7121211182125595e+308] = null
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0546776681946723e+308] = [-100,213]
return a*b-c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = [783,1.7976931348623157e+308,403,0,714,618,49,783]
argument7[1.0546776681946723e+308] = 1.5991420545924729e+308
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[705] = null
base_3[1][1] = 1.1896590294436115e+308
return a+b/c
};
var argument7 = 1.499835974022376e+308;
var argument8 = false;
var base_0 = [969,783,122,49,242,59]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,783,122,49,242,59]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,783,122,49,242,59]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,783,122,49,242,59]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test862.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)