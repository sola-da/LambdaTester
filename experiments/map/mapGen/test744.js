





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1] = ""
base_0['length'] = ["C","gL8;;12@:@6","1Py","}","y}dm","p","FJH","L"]
argument2 = false
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = [213,"%",460,";","JT"]
return a*b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = false
argument5[-1] = ""
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0546776681946723e+308] = [">YcJ","PxY4","xcYF","N"]
return a/b+c
};
var base_0 = [460,969,-100,-100,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,969,-100,-100,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,969,-100,-100,607]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,969,-100,-100,607]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapGen/test744.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)