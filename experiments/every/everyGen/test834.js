





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = true
argument2[4.960033715165713e+307] = 1.5195578401660057e+308
return a+b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = [0,"Sd9",1.7976931348623157e+308]
base_1[6] = ""
base_1[0][1] = null
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = null
base_2[1][4] = {"403":969,"969":59,"8.349790021011171e+307":1.002040230507018e+308,"1.1881888464115996e+308":"f-m","KX":"","1.611056866022973e+308":1.3618707999928265e+308}
argument6[8] = 9.396446304352185e+307
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = false
argument7[5] = 9.764888173932289e+307
return a+b*c
};
var argument6 = {"627":607,"J)S":"","1.6243569955246084e+308":1.600540521929961e+308,"(":969};
var argument7 = r_1;
var base_0 = ["M","F","b<3","P","2",618,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M","F","b<3","P","2",618,969]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M","F","b<3","P","2",618,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M","F","b<3","P","2",618,969]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test834.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)