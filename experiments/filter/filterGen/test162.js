





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 126
base_0[4][2] = false
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 823
argument2[3.377960715099946e+307] = 3.3116699372463355e+307
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['A'] = 3.577855906433291e+306
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = [823,655,893,-1,49,655,705,0,122,59]
return a/b-c
};
var base_0 = ["-","7oDO","K_?_"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-","7oDO","K_?_"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-","7oDO","K_?_"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-","7oDO","K_?_"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test162.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)