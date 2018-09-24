





var callbackArguments = [];
var argument1 = 49;
var argument2 = false;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = {}
argument2[4] = ""
argument2[5] = ""
return a/b*c+d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = false
argument5[2] = false
base_1[0][9.12287810829114e+307] = false
return a+b/c-d
};
var argument9 = {"82":627,"655":"#","843":"","":823,"^s":1.6747728325755965e+308,"1.0712694037182985e+308":"V","1.1170455118148091e+308":""};
var argument10 = ["A","dcN","E","=","Zu","w"];
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = 893
return a/b/c+d
};
var argument13 = r_1;
var argument14 = r_3;
var argument15 = r_2;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['HMm'] = true
base_3[0][4] = true
return a-b/c/d
};
var base_0 = [627,82,242,893,242,25,705,783,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,82,242,893,242,25,705,783,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,82,242,893,242,25,705,783,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,82,242,893,242,25,705,783,714]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)