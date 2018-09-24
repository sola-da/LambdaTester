





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][2] = "}"
return a/b*c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = false
argument6[3] = ""
argument6[2.4183178393969103e+306] = null
return a/b/c
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = {"25":2.155169969706242e+307,"893":1.3235068169824915e+308,"1.5463879963383091e+308":"j","8.213497210812092e+307":"","6.88164042191065e+307":"C:<","x":"","":3.6177961255384554e+307,"6.990277679167275e+306":"xR","9.108269446077535e+307":4.823293273016053e+307}
base_2[8] = false
return a*b+c
};
var argument8 = r_1;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 1.077801750961878e+307
argument11[1.268696794505825e+308] = null
return a-b/c
};
var base_0 = ["%",5e-324,"Bp",49,25,843,122,969,"0|<B"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%",5e-324,"Bp",49,25,843,122,969,"0|<B"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%",5e-324,"Bp",49,25,843,122,969,"0|<B"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%",5e-324,"Bp",49,25,843,122,969,"0|<B"]
var r_3= undefined
try {
r_3 = base_3.every(argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test962.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)