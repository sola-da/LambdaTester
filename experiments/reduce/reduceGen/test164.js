





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ""
base_0[6] = false
return a*b/c+d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[126] = false
base_1[1][0] = 213
return a/b*c+d
};
var argument5 = -100;
var argument6 = true;
var argument7 = null;
var argument8 = null;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = [126,705,783,242,893]
return a*b/c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = {"705":59,"":"g","5e-324":"","q,":9.237442125866948e+307,"n%:5`":4.644023027581542e+307}
argument12[403] = ["H",",]vA"]
return a/b*c/d
};
var argument12 = false;
var base_0 = ["b3b","hdnC=B","<","geK}","="]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b3b","hdnC=B","<","geK}","="]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b3b","hdnC=B","<","geK}","="]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b3b","hdnC=B","<","geK}","="]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)