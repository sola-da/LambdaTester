





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = 4.727282475226121e+307
base_0[6] = 49
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2][783] = ["L-QZ","P","E"]
base_1[2][8.05235215815219e+307] = 4.937944741503722e+307
return a*b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = {"126":"","595":"%)b","":969,"3.877485579651811e+307":1.5601244785262047e+308,"1.6194294518621799e+308":705}
base_2[6] = {}
argument5[2][783] = ["K^","p","inlWsB","Q","?","i","gMCkS","m"]
return a/b*c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
base_3[0][1] = [0,"_*K",82,"oB>",655,"z",893,"="]
argument8[5] = {"403":460,"823":";5","6.134534230778026e+307":"","-100":403,"?":1.1142567323646329e+308}
return a-b*c
};
var argument7 = r_3;
var base_0 = ["7",59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7",59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7",59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7",59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test494.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)