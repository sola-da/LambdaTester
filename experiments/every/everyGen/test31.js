





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = "b"
base_0[8] = 82
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = ""
argument3[0] = ""
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 460
base_2['length'] = {"403":1.1165514185190782e+308,"714":7.547874733289215e+307,"Xt":"","K":"#","c QL":">p","1.3392759337953377e+308":607,"6.010841542772436e+306":"","":""}
base_2[3] = ""
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = null
base_3 = {"843":1.4884459892506043e+308,"":"","x":1.892375166449034e+305}
base_3[3] = false
return a-b+c
};
var base_0 = [714,969,1.7976931348623157e+308,25,823,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,1.7976931348623157e+308,25,823,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,1.7976931348623157e+308,25,823,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,1.7976931348623157e+308,25,823,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/every/everyGen/test31.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)