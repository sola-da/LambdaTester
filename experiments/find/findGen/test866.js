





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = null
return a/b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = {"25":"","122":"","1.7513275487828838e+308":"g","":"","6.662035277069856e+307":1.3949919502493468e+308,"2.32961323776753e+307":"Q:1","7.419531624425143e+307":"o"}
argument5[783] = false
argument4['a8r['] = 5.809174206507585e+306
return a-b-c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = true
argument6[3.377960715099946e+307] = {"25":"2KCS","595":"","618":"rZ","":969,"'":0,"1.7976931348623157e+308":607,"OuZ":" '","+]Y":9.527735341699312e+307,"1.5113086650967226e+308":969,"8.423637513124959e+306":8.591092654248734e+307}
argument7[627] = "!"
return a/b-c
};
var argument7 = {"242":"","h":126,"":"m(","1.702653220601827e+308":"]%*kt","p":""," ,H":9.89254614850745e+307,"9.71722630370935e+307":"K1t"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = ""
argument9[8.748669805137695e+307] = {"*":655,"I":"qtq","t":"#69A","t7":969}
argument10[1.1881593224845412e+308] = ""
return a+b-c
};
var argument9 = null;
var base_0 = [893,460,893,783,843,122]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,460,893,783,843,122]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,893,783,843,122]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,893,783,843,122]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test866.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)