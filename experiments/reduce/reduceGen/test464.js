





var callbackArguments = [];
var argument1 = true;
var argument2 = "Y8DW1ZP";
var argument3 = {"122":"","126":3.6467558492174557e+307,"823":"","":100,"q":"","7.985277216055963e+307":2.96141734980269e+307,"7.53339659632868e+306":"","6.7841703234802e+307":1.4749832854829823e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ["8","e,pT=","P","u5","AM","C","m","[h","`"]
argument2[3] = true
return a-b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = null
argument5[893] = false
return a*b+c+d
};
var argument6 = r_2;
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = false
argument8[403] = ["<H","6%","=M","j*","MI","eKo","Pd"]
argument7[0] = null
return a-b+c-d
};
var argument10 = r_2;
var argument11 = "+P";
var argument12 = r_0;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[627] = ""
return a*b-c-d
};
var base_0 = [783,655,714,618,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655,714,618,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655,714,618,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655,714,618,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test464.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)