





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = true
argument2['j'] = [893,157,595]
return a*b/c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[25] = "QAiC"
base_1[8] = {"213":""}
return a*b/c
};
var argument5 = {"714":126,"1.495598835806426e+308":"t4>","":"","3.4030440070185407e+307":6.361365497388426e+307,"4.874752897901679e+307":"","rziV":""};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = {"59":1.6866608988549676e+308,"":3.706847656003612e+307}
argument8['j'] = true
argument8[1.0500354979187844e+308] = {}
return a+b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.7668525981726295e+307] = true
argument8[3.377960715099946e+307] = {"714":49,"1.5053858163821473e+308":82,"3.9528713925797395e+307":705,"4.897984334259787e+307":618,"":"","1.6255245504960968e+306":"","D6":595}
return a*b*c
};
var argument9 = [157,460,460,49,82,126,82,0,-100];
var base_0 = ["Qv",">%","Z","l"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qv",">%","Z","l"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qv",">%","Z","l"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qv",">%","Z","l"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test555.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)