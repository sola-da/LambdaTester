





var callbackArguments = [];
var argument1 = {"":0};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = 843
return a/b-c*d
};
var argument5 = {"460":"","":893};
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = {"403":4.600675548146527e+307,"607":""}
argument6[7] = true
return a*b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = ["f","nP","%K"]
return a-b*c/d
};
var argument10 = "nm";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[82] = {"1.1100151437579552e+308":"w","1.6952641545484466e+308":7.029437042729233e+307,"{":"]","":"7","-1":4.539865717510356e+307,"V!S`z":4.527264320629452e+307}
argument13[403] = ["e",25,893,157]
base_3[3] = [655,403,618,403,"i","p"]
return a*b+c-d
};
var base_0 = [242,843,823,-100,157,213,25,0,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,843,823,-100,157,213,25,0,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,843,823,-100,157,213,25,0,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,843,823,-100,157,213,25,0,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test457.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)