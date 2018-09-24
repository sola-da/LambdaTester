





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[122] = 714
return a-b-c
};
var argument2 = [0,714,893,783,595,1.7976931348623157e+308,242];
var argument3 = [126,655,655,627,705,595,25,82];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.3156198695370476e+307] = [122,627,213,783,100,893,403,893]
base_1[0][1] = ["||sm","F",460,122,"S+",705,242]
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"":0,"9.781342937064103e+307":"5$P^","1.6392298597638212e+307":3.007841515353906e+307}
argument6[1] = {"59":1.0978158000659695e+308,"705":5.539483138062152e+307,"":"i,g","?":"","1.6270559786148198e+308":49,"1.1980776459107609e+308":"C","1.3349286295412294e+308":2.0081280048299365e+307,"1.4740548925805982e+307":""}
argument7[122] = null
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = true
return a-b+c
};
var base_0 = ["(D","`"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(D","`"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(D","`"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(D","`"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test446.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)