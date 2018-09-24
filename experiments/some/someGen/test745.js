





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = false
base_0[5][0] = {"":"","5.682143491626485e+307":"*6","1.2149439098600781e+308":"hWn","1.7976931348623157e+308":"","wD&li-":0}
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = false
base_1[2][5] = [-100,25,714,595,783,714]
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.004668712060429e+307] = {"48":"","893":"Nc&NXI","9.754674975342146e+307":"5p!)","":893,"1.7583184925893746e+308":3.7734290775742293e+307,"s":"","h^w":6.353482129003912e+307}
argument5 = false
argument5[618] = [843,1.7976931348623157e+308,627,59]
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = ",d*"
return a/b+c
};
var base_0 = ["o","ZK7Hr","b@F+","acq","R",">3",")","`:","Y",">"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","ZK7Hr","b@F+","acq","R",">3",")","`:","Y",">"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","ZK7Hr","b@F+","acq","R",">3",")","`:","Y",">"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","ZK7Hr","b@F+","acq","R",">3",")","`:","Y",">"]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test745.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)