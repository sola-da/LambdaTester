





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['io'] = true
argument2['io'] = null
argument2[1.9097830510613482e+307] = null
return a+b/c
};
var argument2 = 2.793529249714919e+307;
var argument3 = 893;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = true
return a+b*c
};
var argument5 = null;
var argument6 = 242;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument8[1.3599216339661573e+308] = "8"
return a+b-c
};
var argument8 = r_1;
var argument9 = true;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"705":49,"":""}
return a/b-c
};
var base_0 = ["dLf",59,823,"4",627,1.7976931348623157e+308,969,"qI","ReU6i"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dLf",59,823,"4",627,1.7976931348623157e+308,969,"qI","ReU6i"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dLf",59,823,"4",627,1.7976931348623157e+308,969,"qI","ReU6i"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dLf",59,823,"4",627,1.7976931348623157e+308,969,"qI","ReU6i"]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)