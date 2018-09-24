





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"0":"?kTs","":""}
argument3 = [460,49,59,"C","}",705,0,"^","ak"]
base_0[2] = 0
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = null
argument3[618] = [59,"5m",1.7976931348623157e+308,"E",893,"2","=b","G9{"]
return a+b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"157":82,"6.368475752825005e+307":1.2869446087979428e+308,"":";Xu","*":"Qw+","NU":2.5793190405755285e+307,"1.214647160557815e+308":25,"1.7976931348623157e+308":""}
return a-b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"8tP":"","1.0000910424951608e+308":"p]tAzLC0"}
base_3['length'] = {"25":627,"893":705,"":"DE?","z":655,"g":"#h","3.8349261746488035e+307":1.6238728224675091e+308}
base_3[1][8] = 4.917330924485011e+307
return a-b*c
};
var base_0 = [595,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test200.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)