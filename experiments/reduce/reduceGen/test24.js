





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
argument1[4] = 1.142755333378869e+308
return a*b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"0":-100,"607":"","2.2536728476945566e+307":"w","":"","-1":1.5359879880456342e+308,"9.52948378751779e+307":"","1.642370712172105e+308":5e-324,"1.630533634636979e+308":"N7"}
argument4 = false
base_1[3] = 1.1310408288195765e+308
return a-b+c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b/c*d
};
var argument4 = null;
var argument5 = false;
var argument6 = r_2;
var argument7 = r_1;
var argument8 = 823;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = false
base_3[6] = true
base_3[6] = null
return a/b/c-d
};
var base_0 = [460,705,655,460,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,705,655,460,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,705,655,460,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,705,655,460,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test24.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)