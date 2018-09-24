





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = [1.7976931348623157e+308,126,783,460,49,595]
base_0[8] = 1.3782068353828195e+308
return a*b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.953791384496108e+307] = {"5":"^G}","403":2.4921056511026713e+307,"618":"g","969":"a","dJ_":705,"Nb":"U","m":"","":"z","D:":6.943565069719891e+306,"8.57343467179916e+307":3.8980089808448797e+307}
return a+b*c
};
var argument5 = null;
var argument6 = {"59":"","1.098895751892193e+308":5e-324,"HD":2.021834950886338e+307,"1.3293070083351006e+307":1.5751714557667718e+308};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[242] = [242,59,1.7976931348623157e+308]
argument9['AO?'] = null
base_2 = true
return a-b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = 1.8708091004082567e+307
return a/b*c
};
var argument9 = null;
var argument10 = null;
var base_0 = [403,618,714]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,618,714]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,618,714]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,618,714]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)