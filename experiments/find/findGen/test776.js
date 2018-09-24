





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = null
argument2[7] = null
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = false
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.7668525981726295e+307] = {"705":59,"8.616228114587428e+306":"]","1.0715149135468705e+308":627}
argument5[6] = "A"
base_2[3][1.7261030733891165e+308] = ""
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"213":1.19103119205173e+308,"783":"","":"R","9.438042194543426e+307":1.0170347579586251e+307,"1.7976931348623157e+308":"","6.140527892108786e+306":"9c'%c","$":705,"1.772071810500412e+308":0}
base_3[0] = true
return a+b*c
};
var argument5 = 2.9784280372506695e+307;
var base_0 = ["f","m){","v}P^","rd8"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f","m){","v}P^","rd8"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f","m){","v}P^","rd8"]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f","m){","v}P^","rd8"]
var r_3= undefined
try {
r_3 = base_3.find(argument4,argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test776.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)