





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[49] = null
base_0[2][8.05235215815219e+307] = null
return a-b+c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = ["V",783,783,242,403,783,"{"]
argument6[59] = [157,460,82]
return a-b+c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = 1.5156320348672133e+308
argument8[2] = true
return a/b-c
};
var argument7 = false;
var argument8 = "";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = true
argument10[1.3130321063336282e+308] = 100
return a+b*c
};
var base_0 = [82,893,25,627,59,-100,655,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,25,627,59,-100,655,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,893,25,627,59,-100,655,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,25,627,59,-100,655,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)