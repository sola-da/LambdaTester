





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = -1
argument3[3] = false
base_0['length'] = ""
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = null
base_1[6][4] = 5.388617213802058e+307
argument4[4] = true
return a-b/c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['W'] = "1"
argument7['V'] = null
argument7[4.953791384496108e+307] = null
return a/b*c
};
var argument6 = {"49":4.2591397903246595e+307,"618":460,"714":"W","823":5.377633259486112e+307,"":"",":w{V":82,"-100":1.802077945357351e+307,"1.0539853554203716e+308":"","4.7217949808179213e+306":1.0956292695117396e+308};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['b'] = ["%",",ZJS","9:X","ff","B","9","="]
return a+b*c
};
var argument8 = r_2;
var argument9 = "";
var base_0 = ["W"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test813.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)