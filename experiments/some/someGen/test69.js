





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"25":969,"59":"q0(","82":"","122":-100,"":"l^","8.103955504659053e+307":"5X",",":-1,"1.7181158338435384e+308":"#@x_R<","J4":""}
base_0[3] = false
argument2[5] = {}
return a*b+c
};
var argument2 = null;
var argument3 = {"893":")","6.200890908436524e+307":6.629762941077335e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = [705,213,0,595,460,242,403,126,242]
argument6 = ""
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = true
argument6[5] = null
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = [1.7976931348623157e+308]
base_3[2] = {}
base_3[0] = true
return a/b-c
};
var argument7 = r_3;
var argument8 = {"82":"","1.410569720575278e+308":"v:iY ","":""};
var base_0 = ["D","`_","yoy&","(","cvu#","Mk%","y("]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","`_","yoy&","(","cvu#","Mk%","y("]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","`_","yoy&","(","cvu#","Mk%","y("]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","`_","yoy&","(","cvu#","Mk%","y("]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test69.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)