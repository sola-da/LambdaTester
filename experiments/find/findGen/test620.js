





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = 100
argument1[893] = [126,-1,783,843,49]
argument1[4] = " M!l4"
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[969] = {"":"","n&H$y":618,"M":"","1.5754752272121107e+308":"K","}^!_":122}
return a-b+c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = false
return a/b+c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ["g(y9*",655,618]
argument9[1] = [213,1.7976931348623157e+308]
return a+b+c
};
var argument8 = ["k,Eo[","i,","`","I","25p"];
var base_0 = ["6J","q","J1n","fL@"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6J","q","J1n","fL@"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6J","q","J1n","fL@"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6J","q","J1n","fL@"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test620.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)