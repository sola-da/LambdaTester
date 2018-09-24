





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = false
argument2[49] = "R"
base_0[2] = ""
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = 714
return a/b+c
};
var argument3 = 49;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = 9.435180727769541e+307
return a+b*c
};
var argument5 = {"j":25,"b":5.769209924172425e+307,"":460,"JDU":3.54696358842057e+307,"am":"","O":"","3.8801540856826585e+307":823,"1.3250229781739033e+308":2.3116846365031627e+307};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7][2] = "SLQD"
base_3[6] = {"157":893,"705":1.6674490204222088e+308,"`":1.4659390716947758e+308,"":126,"1.527908200009961e+308":1.150898017125378e+308}
base_3[7][2] = false
return a*b*c
};
var argument8 = false;
var argument9 = "";
var base_0 = ["t","&|","K","v","x:g","("]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t","&|","K","v","x:g","("]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t","&|","K","v","x:g","("]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t","&|","K","v","x:g","("]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test374.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)