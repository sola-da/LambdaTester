





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"":213,"R":5.3119924174285964e+306,"A":"","%;nm":"$"}
base_0[1][0] = ""
base_0[7] = false
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9.551053197482062e+307] = false
argument4['^h'] = [122,1.7976931348623157e+308]
return a-b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[9.551053197482062e+307] = true
argument4['5L'] = ["W","!=","v8f","Axg","1","Z"]
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.5109538778533692e+308] = {"7.344402884450823e+307":969,"1.463033909561475e+307":"5","":"K","5e-324":""}
argument5[9] = "V7p8"
return a+b*c
};
var base_0 = ["6JPN","du","Xv"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6JPN","du","Xv"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6JPN","du","Xv"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6JPN","du","Xv"]
var r_3= undefined
try {
r_3 = base_3.some(argument4)
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
require("fs").writeFileSync("./experiments/some/someGen/test497.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)