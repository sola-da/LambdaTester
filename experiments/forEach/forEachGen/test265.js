





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"460":969,"655":1.0574283919266698e+308,";":"","":"","c":157}
argument2[1.3130321063336282e+308] = [893,5e-324,783,126,122,460,893]
return a+b/c
};
var argument2 = {"126":25,"403":705,"893":843,"":126,"N":"","{H7j":"","3.542528940020599e+307":783,"5e-324":4.668914191515316e+307,"2.7842742434593406e+307":783};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = 49
argument4[2][783] = {"1W>":1.6457151015823817e+308}
argument4[5] = true
return a+b/c
};
var argument4 = false;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 6.558144531998456e+307
argument6[2] = true
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = {"893":9.049759773852002e+307,"1.5417885176939019e+308":1.4375398399115817e+308,"":4.453773288167034e+307,"1.3555749636832502e+308":"3aA"}
argument8[3] = null
base_3[9] = true
return a+b/c
};
var argument8 = null;
var argument9 = false;
var base_0 = [100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test265.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)