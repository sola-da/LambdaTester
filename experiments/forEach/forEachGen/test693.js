





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = ""
return a+b-c
};
var argument2 = ["H","MK","=","a","i"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = false
base_1[0][823] = false
argument5[49] = [")RZ","$tx","a",823,"C"]
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[969] = true
base_2[4][6] = false
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"705":1.7920735092160647e+308,"5.08880333706399e+307":"","1.7591379746904898e+308":0,"":"","[=_":1.0243445909253945e+308}
argument6[7] = true
return a*b-c
};
var argument6 = 1.0998292055530244e+308;
var argument7 = null;
var base_0 = [627,-1,157,618,49,-1,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-1,157,618,49,-1,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-1,157,618,49,-1,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-1,157,618,49,-1,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test693.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)