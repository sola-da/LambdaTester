





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["ph",":","<|&","a"]
base_0[5] = 714
argument2[122] = 1.080601185386454e+307
return a/b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6.148642213884202e+307] = "6"
argument4[1.3599216339661573e+308] = true
base_1[0][0] = ["P","N","c","35C9U","+","a+py^"]
return a/b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = null
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[783] = {"242":1.7974797226479424e+307,"HG":"","kC":705}
return a/b+c
};
var argument7 = null;
var base_0 = [49,242,25,126,823,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,242,25,126,823,213]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,242,25,126,823,213]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,242,25,126,823,213]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)