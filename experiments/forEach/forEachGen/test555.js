





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = "n"
argument2[3.0481490052276395e+306] = {"0":2.898843959744583e+307,"82":49,"157":1.5663088959992427e+306,"627":"+","1.502378480797836e+308":49,"5e-324":5.383445307900355e+307,"":1.2694682805808457e+307,"#M":"","1.4689062777423582e+308":""}
return a-b-c
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = "Z"
base_1[3][0] = {"49":"s<t","607":59,"714":"","":714,"1.1481896906750974e+308":7.759870510041285e+307,"O":7.488291566363502e+306,"1.5217171167531933e+308":82}
return a+b/c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = {"122":655,"714":"]q0","?N1":"","":"T-G,"}
base_2[3] = {"705":1.1002140758303028e+308,"823":823,"SbN":460,"po":"V","":"d+'^A"}
argument7[126] = ["M"]
return a*b-c
};
var argument7 = "";
var argument8 = {"0":-100," ":"5FP","":""};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = [126]
return a*b-c
};
var argument10 = "";
var argument11 = true;
var base_0 = ["V","?","i","o","R%B","b"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","?","i","o","R%B","b"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","?","i","o","R%B","b"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","?","i","o","R%B","b"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test555.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)