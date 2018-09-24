





var callbackArguments = [];
var argument1 = "@";
var argument2 = "";
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = false
return a+b/c/d
};
var argument5 = null;
var argument6 = {"2":"","893":"{M","":"","3.4354135409058053e+307":595,"X":"","6.859913408855633e+306":157,"1.4976364306000756e+308":""};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[59] = true
return a-b/c*d
};
var argument9 = r_0;
var argument10 = 714;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = [627,843,460,893]
argument11[25] = 100
base_2[0][3] = null
return a+b-c/d
};
var argument13 = {"823":607,"#k":"`<","{[":242,",":"","SF)":3.9502859248785805e+307,"S":783,"":"fi&2","ux":""};
var argument14 = null;
var argument15 = 100;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[82] = null
base_3['length'] = null
argument15[5] = ["qk_OG",460,59,"yE",1.7976931348623157e+308]
return a+b-c/d
};
var base_0 = [242,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test452.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)