





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = null
base_0[1] = null
return a+b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ""
argument4['j'] = {"969":4.332533388787325e+307,"-100":655,"8.573968367659028e+307":157}
return a-b/c
};
var argument4 = r_1;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
base_2[1] = 8.470263441397717e+307
argument7[1.0500354979187844e+308] = {"0":"","122":82,"843":213,"9.122710668900559e+307":2.5633879697886958e+306,"S":"rb","":"w","V":100}
return a/b*c
};
var argument7 = null;
var argument8 = 1.7095732822537767e+308;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = null
argument11[5] = "&"
return a*b/c
};
var argument10 = null;
var argument11 = null;
var base_0 = ["8r","F","9","|","]","9j]","|$Xnj","b","U"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8r","F","9","|","]","9j]","|$Xnj","b","U"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8r","F","9","|","]","9j]","|$Xnj","b","U"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8r","F","9","|","]","9j]","|$Xnj","b","U"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)