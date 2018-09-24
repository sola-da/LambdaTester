





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = {"8.778372094688255e+307":627,"":"g"}
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"25":1.8440685894947903e+307,"157":"#","607":783,"783":242,"":1.4830441451385347e+308,"2.179317288159317e+307":"y","1.7976931348623157e+308":1.3203768818514431e+308,"1.0926725297658841e+307":"tK"}
base_2[7] = {"1.603313590180487e+308":1.5860290469149455e+308,"`":1.114244724712357e+308,"1.5661230906998122e+308":6.155776818935626e+307,"":";O","1.0263236799540323e+308":"","1.4592881572758609e+308":""}
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = 1.7964264499723414e+308
base_3[6] = ""
base_3[5] = [242,843,213,705,705,122]
return a-b+c
};
var argument5 = null;
var base_0 = [82,893,157,82,0,705]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,157,82,0,705]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,893,157,82,0,705]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,157,82,0,705]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test206.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)