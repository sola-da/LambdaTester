





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = [783,-1,823,823,25]
argument2[6] = true
argument2[5] = {"59":1.7222861618339213e+308,"969":"U","d":"[","D":"","1.7976931348623157e+308":"%","c":4.1416160571218973e+307,"1.2528714671851125e+308":"","8.817205138034203e+307":8.77689412583853e+307,"1.471921936394348e+308":7.38326654669319e+306}
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[969] = null
argument5[714] = {"100":"-?","969":"","1.4754790833357358e+308":8.684916922642612e+307,"pg4":893,"":"]O","8.571285378100114e+307":2.3642451741341387e+307,"`%":1.6671167955866934e+308}
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['3Tpj5'] = {"0":618,"100":5.610949350429153e+307,"126":"v","893":"","8.68434962027867e+307":"j","":627,"1.5712097030242105e+308":"O","1.6253037998303243e+308":"","1.7869602620863423e+308":705}
base_2[2][5] = {"122":1.3613893644589698e+308,"460":618,"607":82,"ZR@":"","":6.028295637681606e+306,"b":460,"1.7976931348623157e+308":"g$_&{","h":"r","<8":705}
argument6[157] = ""
return a*b*c
};
var argument5 = 655;
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = {"25":595,"njqQ":1.5820007726743511e+308,"4.339576529010606e+307":"","I3":3.949132274673575e+307}
argument9[157] = false
base_3[8] = false
return a*b-c
};
var base_0 = [59,595,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,595,705]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,595,705]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,595,705]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test406.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)