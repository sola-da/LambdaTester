





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = "+"
argument3[0] = {"":"R_6}"}
argument2[4] = {"9":"","618":"{d,","714":460,"6.057992580806615e+307":1.7055360203662907e+308,"":"","4.947335672747997e+307":1.7693423705193614e+308}
return a-b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"0":"=","100":3.393442888848869e+307,"242":"}","618":"","i":"","7.76535490148246e+307":82,"3.659453639482625e+307":59,"R":8.883447834267253e+307,"1.571761451518634e+308":""}
argument5 = [460,126,5e-324]
base_1[1][3] = 627
return a*b+c
};
var argument5 = "";
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['T'] = false
return a/b*c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = {"59":"","655":"Y","}6":"H","3.176191082559868e+306":"","5e-324":"luX","O3":"Qz","tKl`":3.456774195965196e+307,"Rx":"+"}
argument11[2] = null
return a-b-c
};
var argument10 = null;
var base_0 = [969,100,714,1.7976931348623157e+308,157]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,100,714,1.7976931348623157e+308,157]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,100,714,1.7976931348623157e+308,157]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,100,714,1.7976931348623157e+308,157]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test368.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)