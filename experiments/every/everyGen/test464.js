





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = null
argument2[2] = "c"
return a/b*c
};
var argument2 = {"n":"W"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {}
base_1[2] = "s"
argument4[1.3599216339661573e+308] = ["D","zht>O","D","*]Q$","Y","6","e<","tf",")V"]
return a+b/c
};
var argument4 = [460,82,714,59,126];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = false
argument7[8] = [783,"e9o","^fn)erASe","?N",783]
argument6[3.3156198695370476e+307] = {"607":2.993433343479828e+306,"8.432819975224834e+307":4.7943098254543e+307,"|":"","":7.333747130114187e+307}
return a/b*c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['sJRZP'] = {"7.069637294891865e+307":"*%uAg","6.514112305698037e+307":"yS7"}
argument8[893] = {"7":"","100":"5","655":627,"714":"","2.4109858761869366e+307":823,"j":"","6.300850316419962e+307":"}f","":7.544666785682189e+307,"1.2512158172645717e+308":705}
argument9[122] = "Na"
return a+b-c
};
var argument8 = r_3;
var base_0 = [82,655,122,-100,100,122,1.7976931348623157e+308,618,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,655,122,-100,100,122,1.7976931348623157e+308,618,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,655,122,-100,100,122,1.7976931348623157e+308,618,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,655,122,-100,100,122,1.7976931348623157e+308,618,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test464.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)