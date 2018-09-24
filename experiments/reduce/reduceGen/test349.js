





var callbackArguments = [];
var argument1 = 9.680869470600548e+307;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = {"122":1.7963252038520197e+308,"126":"","213":"6p","242":"I","403":3.5485180808677176e+307,"595":59,"6.003058328770045e+307":"u","[":3.041319302136282e+307}
argument2[1] = false
return a+b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = null
argument6[1.1277822633002616e+308] = [59,"Pus","Le",843,-100]
argument6[5] = false
return a+b+c+d
};
var argument6 = r_1;
var argument7 = {"49":"","1.145833026025045e+308":"f9","3[":"","":1.1623049905021237e+308,"nt":"!"};
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9] = ["6DOy"]
return a*b*c*d
};
var argument10 = {"25":"","460":5.263579564570391e+307,"655":5.642121551414632e+307,"783":"sKLAo-?","893":1.4542857980145518e+307,"1.0126742903679802e+308":"","":1.6317040915995005e+308,"@":8.756479360282508e+307,"3.6515837200770604e+307":607};
var argument11 = true;
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = ["J>v","j","4","Ly",157,843,126,"#"]
argument12[25] = ["3","a","h",893,"`9F2"]
return a-b-c/d
};
var base_0 = ["]","f","C"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","f","C"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","f","C"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","f","C"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test349.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)