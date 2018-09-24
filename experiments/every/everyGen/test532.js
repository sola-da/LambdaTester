





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"6.627646735516183e+307":7.777511320038933e+307}
argument3[2.4183178393969103e+306] = 100
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ["qk_OG",460,59,"yE",1.7976931348623157e+308]
argument3[1] = "&)@g"
return a-b+c
};
var argument3 = {"":"","5e-324":714,"4p":""};
var argument4 = [0,607];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = null
argument6[1] = {"2.4436797213372336e+307":"m1V","":"","a":783}
argument5[2] = false
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ""
argument7[8] = false
argument7[403] = {"122":"","714":9.261990736725053e+307,"1.4481550596109624e+308":8.951668485698765e+307,"-100":"2","":"nQ","u":6.168965759983793e+307,"8.563029468192291e+307":"","?":""}
return a+b/c
};
var base_0 = ["o","[","svUWN"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","[","svUWN"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","[","svUWN"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","[","svUWN"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)