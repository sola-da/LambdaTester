





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
return a*b-c
};
var argument2 = 2.3055306284510414e+307;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 5.964416976575303e+307
argument6[1.4034744228995816e+308] = [893,"@Cm",49,"t"]
argument5[8.748669805137695e+307] = [893,618,82,403,-100,126]
return a*b*c
};
var argument5 = null;
var argument6 = 705;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 25
argument8[-1] = null
base_2[4] = null
return a-b/c
};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = 5.772411557514219e+307
return a-b-c
};
var argument11 = false;
var base_0 = ["ye","I8PC","2","L","u","7","3Zr","Nvi",">","H"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ye","I8PC","2","L","u","7","3Zr","Nvi",">","H"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ye","I8PC","2","L","u","7","3Zr","Nvi",">","H"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ye","I8PC","2","L","u","7","3Zr","Nvi",">","H"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)