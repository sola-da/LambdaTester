





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = true
argument2[122] = 49
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = null
base_1[4] = true
return a-b+c
};
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = null
return a+b-c
};
var argument6 = ["f","C","O","N"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = ["9","&","hML","AD","<G","KA=",":"]
argument8[403] = [25,969,213,655,893,893,126]
return a-b-c
};
var base_0 = ["u",627,"U","9","Ds=","H"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u",627,"U","9","Ds=","H"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u",627,"U","9","Ds=","H"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u",627,"U","9","Ds=","H"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test23.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)