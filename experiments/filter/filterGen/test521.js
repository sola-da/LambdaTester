





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['filter'] = {"82":"8","242":"L' ?6","655":"9K*","1.4969665737090527e+308":213,">{":"uSp","":"0F","|d":5.535971743355838e+307}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = "Bu"
base_1[1][0] = "%E&"
return a*b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = {}
base_2[5] = 705
argument5 = {"100":"","1.5851807816255282e+308":"i0>","5.772440650126427e+307":783,"":5.28233942806119e+307,"1.453429114424213e+308":823,"a'":"","1.9349160088418642e+307":-1}
return a*b-c
};
var argument4 = false;
var argument5 = "H";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1.3434821406183095e+308] = "&o"
return a/b/c
};
var argument7 = r_1;
var base_0 = [49,213,82,"fEJ","+*","{","=",0,"a=","M"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test521.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)