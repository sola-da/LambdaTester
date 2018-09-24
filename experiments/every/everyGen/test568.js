





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = true
argument3[2.4183178393969103e+306] = [893,157,595]
return a*b/c
};
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['io'] = "QAiC"
base_1[4] = {"213":""}
return a*b/c
};
var argument5 = {"714":126,"1.495598835806426e+308":"t4>","":"","3.4030440070185407e+307":6.361365497388426e+307,"4.874752897901679e+307":"","rziV":""};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"59":1.6866608988549676e+308,"":3.706847656003612e+307}
argument8['sJRZP'] = true
argument9[2.4183178393969103e+306] = {}
return a+b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.3156198695370476e+307] = true
argument8[2] = {"714":49,"1.5053858163821473e+308":82,"3.9528713925797395e+307":705,"4.897984334259787e+307":618,"":"","1.6255245504960968e+306":"","D6":595}
return a*b*c
};
var argument9 = [157,460,460,49,82,126,82,0,-100];
var base_0 = ["Qv",">%","Z","l"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qv",">%","Z","l"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qv",">%","Z","l"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qv",">%","Z","l"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)