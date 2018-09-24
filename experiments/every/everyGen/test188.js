





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = false
argument2[3.3156198695370476e+307] = null
argument2 = {"618":893,"969":"","I":"","":"","1.0332319288579883e+308":"Y","1.3548608996134217e+308":"i","Y[":"","k":595}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = [126,5e-324,607]
return a/b-c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"126":"jA","213":7.989459498743425e+307,"783":1.69373236480489e+308,"969":"","1.314174044360118e+308":9.185141553921037e+307,"1.534518663729034e+308":59,"|":969,"":714,"9.844569476990657e+307":"y"}
base_2[0][2] = [82,618,25]
argument6 = null
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = "o"
return a+b-c
};
var argument7 = ["r","%:J","q","5"];
var argument8 = "ALR";
var base_0 = [595,893,627,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,627,705]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,627,705]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,627,705]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test188.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)