





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['!cck7Mm'] = ["9QAiC",607,157,213,607,")",25,403,"T"]
base_0['length'] = null
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
argument4['K'] = {"705":"","714":"yZ","823":"","TM":"","":"","3.1120379026838735e+307":"","3.706847656003612e+307":59,"1.6866608988549676e+308":4.76121102397252e+307,"2.6813117927120463e+306":""}
argument5[6] = false
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ""
argument6[3.7154103611117224e+307] = ""
base_2[0][0] = {"25":"r","":"<%","4.897984334259787e+307":618,"1.6255245504960968e+306":"","D6":595,"1.6956801597930496e+308":6.745652864337251e+307,"Y":823}
return a*b/c
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"122":""}
argument9[5] = 1.6469863729306266e+308
argument8['K'] = 705
return a+b*c
};
var argument8 = "";
var argument9 = false;
var base_0 = [893,157,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test562.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)