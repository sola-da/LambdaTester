





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = false
return a/b-c
};
var argument2 = true;
var argument3 = "3";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = null
argument5 = {"714":1.6824698055111112e+308,"xU":1.2709241858763284e+308,"":"","r":1.101506737181496e+308,"3.238057537021918e+307":":i"}
argument5['f-d'] = ["Rn<","U","e0#]FX4","5bRbr",157,122,"$","Z"]
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0500354979187844e+308] = "{L"
base_2[0] = null
return a-b-c
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = "n"
base_3[1] = [49]
argument10[3] = ["|k","p","dx;a","&","seE=fn"]
return a+b-c
};
var argument9 = ["U)","_",",","8%","J!","Y","b"];
var argument10 = {"82":705,"783":5.931129991750716e+307,"":607,";":1.7699805357500372e+307};
var base_0 = ["8sImL",823,460,";","e{",126,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8sImL",823,460,";","e{",126,157]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8sImL",823,460,";","e{",126,157]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8sImL",823,460,";","e{",126,157]
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
require("fs").writeFileSync("./experiments/find/findGen/test246.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)