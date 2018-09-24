





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = {"25":"","9.319341075106854e+307":"dD","2.822797281471959e+307":"","P#":0,"1.215094575121337e+308":"o`","":"X","1.0826064488436702e+308":"ZE,*","1!":"K"}
base_0[8] = null
argument3[969] = null
return a+b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = true
base_1[3][7] = {"0":-1,"403":"l2F1Y:","823":82,"":"b","B":59,"1.3614964400958842e+308":"","8.684855220712112e+307":"t4t","h":1.555893355450763e+307,"c":"Y","0SZ1y":""}
base_1[2] = ["7",",=UJh;,4","X"]
return a/b*c
};
var argument4 = ["*","T","Vb","uK"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = 1.021172047376743e+307
argument7[5] = [-1,-100,59,403]
argument7[969] = ["1#","`ZV","p"]
return a*b/c
};
var argument6 = {"242":"","403":"","969":403,"1.0854094166227686e+308":1.0505582537417128e+308,"9.6843039694463e+307":5.323855876415418e+307};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.7668525981726295e+307] = null
argument9[1.0500354979187844e+308] = ""
argument10[2] = "|"
return a+b+c
};
var base_0 = ["0omu","Km}"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0omu","Km}"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0omu","Km}"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0omu","Km}"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test886.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)