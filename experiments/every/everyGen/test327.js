





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = "h"
return a*b+c
};
var argument2 = null;
var argument3 = 595;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = 82
return a+b/c
};
var argument5 = r_0;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = 6.9315407549851315e+307
base_2[6] = {}
return a-b+c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ["Y",969,"2",618,126,157,59,126,100]
return a*b*c
};
var argument10 = null;
var base_0 = [823,"B?:",0,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"B?:",0,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"B?:",0,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"B?:",0,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)