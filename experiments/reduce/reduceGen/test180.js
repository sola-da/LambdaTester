





var callbackArguments = [];
var argument1 = null;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = false
return a/b-c*d
};
var argument5 = r_0;
var argument6 = false;
var argument7 = 783;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
argument6[403] = 714
base_1[5] = 1.7333106543365693e+308
return a*b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = [82,"V$&3"]
argument11[627] = 100
return a*b-c*d
};
var argument10 = true;
var argument11 = true;
var argument12 = 25;
var argument13 = r_0;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"242":"","843":4.05769758333948e+306,"3.941628934294813e+307":6.60742164679736e+307,"8.704047389294296e+307":"","a":"","Iu":1.1578358116427372e+307,"":"6"}
return a+b+c/d
};
var base_0 = [-100,5e-324,655,242,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,5e-324,655,242,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,5e-324,655,242,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,5e-324,655,242,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test180.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)