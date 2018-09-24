





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"59":3.226342190508193e+307,"595":"g","":"","1.2871622367482609e+308":"","1.4445113771106277e+308":"","e":2.2554425945760193e+307,"1.3787182682553866e+308":"","-1":">","f":6.674520642309609e+307}
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = 9.513072163907085e+307
base_1 = "d"
argument3[1.7121211182125595e+308] = true
return a*b-c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][5e-324] = true
argument6[-1] = {"460":"","655":8.690592159054067e+306,"9.072123727582963e+307":1.1546783937189794e+308}
argument6[1] = {"242":"XK","+":1.7976931348623157e+308,"7.512055161523307e+307":"","":213,"1.3887192537041398e+308":"","S":5.470722189505318e+306,"AG[":"","1.5590273504329554e+308":126,"4.4259365141711164e+307":1.4464216483041636e+308}
return a/b/c
};
var argument6 = true;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = 242
argument9['jo'] = {"2.9075939064120475e+307":157}
base_3[2] = "x[qf"
return a/b/c
};
var base_0 = [627,595,705,783,705,655,1.7976931348623157e+308,100,0]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,595,705,783,705,655,1.7976931348623157e+308,100,0]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)