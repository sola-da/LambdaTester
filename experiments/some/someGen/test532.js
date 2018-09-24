





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"6.627646735516183e+307":7.777511320038933e+307}
argument2[4.224481734419934e+307] = 100
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ["qk_OG",460,59,"yE",1.7976931348623157e+308]
argument4[9.551053197482062e+307] = "&)@g"
return a-b+c
};
var argument3 = {"":"","5e-324":714,"4p":""};
var argument4 = [0,607];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = null
argument7[9.551053197482062e+307] = {"2.4436797213372336e+307":"m1V","":"","a":783}
argument7[1] = false
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ""
argument8[1.0727847755854773e+308] = false
argument7['5L'] = {"122":"","714":9.261990736725053e+307,"1.4481550596109624e+308":8.951668485698765e+307,"-100":"2","":"nQ","u":6.168965759983793e+307,"8.563029468192291e+307":"","?":""}
return a+b/c
};
var base_0 = ["o","[","svUWN"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","[","svUWN"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","[","svUWN"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","[","svUWN"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)