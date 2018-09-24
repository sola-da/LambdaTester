





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f'] = null
base_0[3][3] = [893,969,607,705,403,893]
argument2[618] = 9.33768623815728e+307
return a+b*c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = 1.0855658112166722e+308
argument5[1.5109538778533692e+308] = 1.5519946787086272e+308
return a/b*c
};
var argument5 = ["h","L","W","[Y","K","=","1k","i","&b"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5] = true
argument7[157] = ["*a","1","Rh+g","]","`"]
base_2[5][1] = null
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = [126,213,59,595,0,607,0,59,0]
base_3[9] = {"5.303041033500597e+307":""}
base_3[2][5] = null
return a*b/c
};
var argument8 = null;
var base_0 = [783,"f",655,"2",-100,"T"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"f",655,"2",-100,"T"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"f",655,"2",-100,"T"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"f",655,"2",-100,"T"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)