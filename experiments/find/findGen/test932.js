





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1.7261030733891165e+308] = null
argument1[3.377960715099946e+307] = null
argument2['a8r['] = true
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = null
argument4[6.770908161223588e+307] = [126,969]
return a*b*c
};
var argument3 = r_1;
var argument4 = {"4.997377670044043e+307":1.4234832538044328e+308,"":"","S4I":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = ["`f","3","@","bl2","P","K","<","1","*(C="]
argument7[126] = 823
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['LK'] = [59,403,82,893]
argument7['b'] = 213
return a*b/c
};
var argument7 = r_1;
var argument8 = false;
var base_0 = ["WXNe","A84;","cS","&","Q","a","*"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["WXNe","A84;","cS","&","Q","a","*"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["WXNe","A84;","cS","&","Q","a","*"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["WXNe","A84;","cS","&","Q","a","*"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test932.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)