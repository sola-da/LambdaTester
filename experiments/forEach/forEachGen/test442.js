





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = null
base_0[8] = null
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = {"122":25,"627":7.352591069839666e+307,"W|j":":","__":"","":"","#":4.2355273610195785e+307,"H]":"","!":7.417432016876505e+307}
argument5[5] = true
return a+b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4034744228995816e+308] = true
return a+b+c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 6.62339104307805e+306
return a-b/c
};
var argument8 = {"126":"RR4","":8.792434167569424e+307};
var argument9 = null;
var base_0 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test442.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)