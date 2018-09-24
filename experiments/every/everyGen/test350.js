





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = [126,5e-324,893,59,655,25,157,460]
return a*b+c
};
var argument2 = ["=","1U",";0hV","8","891KP<","5=","K","fNW&=S"];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"25":3.7603353200832835e+307,"655":4.989309227716171e+307,"705":1.7796313527406545e+308,"D":"","":"d","Nt":618,"s<B":"$","1.6537183171194879e+308":"","1.2117754524503785e+308":783,"z2":3.8451399511519344e+307}
base_1[3] = {"655":"7Y","893":"?T","":157,"-1":969}
argument5[0] = null
return a+b+c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = false
base_2[0] = 2.7953349574176473e+307
return a*b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.3599216339661573e+308] = ""
argument9[4] = 6.588688264158746e+307
return a*b-c
};
var argument9 = r_0;
var argument10 = true;
var base_0 = [460,460,783,213,49,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,460,783,213,49,655]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,460,783,213,49,655]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,460,783,213,49,655]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test350.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)