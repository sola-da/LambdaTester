





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ""
argument2[4.224481734419934e+307] = true
argument1[3.377960715099946e+307] = 1.3980452199203764e+308
return a*b*c
};
var argument2 = true;
var argument3 = "oM,Zg";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"^":"I","-1":618,"6.715345579221288e+305":"m$"}
argument5['wIs'] = 4.624673085907057e+307
base_1[3] = ""
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 1.7976931348623157e+308
return a/b+c
};
var argument6 = "";
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = null
return a*b+c
};
var base_0 = ["8I","*","i"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8I","*","i"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8I","*","i"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8I","*","i"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test292.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)