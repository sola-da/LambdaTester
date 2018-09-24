





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = {"122":"","403":"","":"","5.902179654390733e+307":"pt","4.1785887542900675e+307":"RZ","1.6002716796036885e+308":"T9k{w","x":"","1.7976931348623157e+308":460}
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "M &4EW#D"
argument3[6] = null
argument3[6] = {"403":"Jc","595":49,"893":618,"1.6535935786759098e+307":"","n::}`NgZ1A(@327":843,"":"","6.983678580539447e+307":714}
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['io'] = 1.7976931348623157e+308
argument5[2] = 7.822524576244376e+307
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = true
return a+b*c
};
var base_0 = [25,213,100,403,1.7976931348623157e+308,122,403,705,100]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,213,100,403,1.7976931348623157e+308,122,403,705,100]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,213,100,403,1.7976931348623157e+308,122,403,705,100]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,213,100,403,1.7976931348623157e+308,122,403,705,100]
var r_3= undefined
try {
r_3 = base_3.every(argument4)
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
require("fs").writeFileSync("./experiments/every/everyGen/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)