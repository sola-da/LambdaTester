





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = ""
return a-b*c/d
};
var argument2 = false;
var argument3 = "d";
var argument4 = 7.147590648601173e+307;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = ["Ll","v","{"]
return a*b-c*d
};
var argument7 = false;
var argument8 = null;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.1280896016417002e+307] = true
argument8[3] = [5e-324,714,"9","^U",783,-100,607,"=n","}","f"]
argument8[25] = [-1,59,618,25,705,213,705]
return a+b+c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[627] = true
return a+b+c*d
};
var argument12 = {"":"q8s^"};
var base_0 = [783,714,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,714,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,714,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,714,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test482.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)