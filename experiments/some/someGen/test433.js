





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6798476101238045e+308] = null
argument3[2] = null
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = {"122":25,"627":7.352591069839666e+307,"W|j":":","__":"","":"","#":4.2355273610195785e+307,"H]":"","!":7.417432016876505e+307}
argument4['Y'] = true
return a+b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = true
return a+b+c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = 6.62339104307805e+306
return a-b/c
};
var argument8 = {"126":"RR4","":8.792434167569424e+307};
var argument9 = null;
var base_0 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,823,-100,607,595,823,122,1.7976931348623157e+308,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test433.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)