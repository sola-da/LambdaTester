





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = ""
return a*b/c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = 714
return a*b+c
};
var argument5 = "7@";
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = false
base_2[2] = null
base_2[3] = [618,403,82,595]
return a+b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 5.378409746124407e+307
argument9[-1] = false
argument8[893] = "MF"
return a-b+c
};
var argument9 = false;
var argument10 = null;
var base_0 = ["n@|","o",893,"4"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n@|","o",893,"4"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n@|","o",893,"4"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n@|","o",893,"4"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test81.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)