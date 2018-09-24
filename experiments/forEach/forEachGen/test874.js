





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = null
return a/b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0446313380579697e+308] = {"25":"","122":"","1.7513275487828838e+308":"g","":"","6.662035277069856e+307":1.3949919502493468e+308,"2.32961323776753e+307":"Q:1","7.419531624425143e+307":"o"}
argument5['j2t'] = false
argument4[6] = 5.809174206507585e+306
return a-b-c
};
var argument4 = true;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1881593224845412e+308] = true
argument7[1.3130321063336282e+308] = {"25":"2KCS","595":"","618":"rZ","":969,"'":0,"1.7976931348623157e+308":607,"OuZ":" '","+]Y":9.527735341699312e+307,"1.5113086650967226e+308":969,"8.423637513124959e+306":8.591092654248734e+307}
argument6[2] = "!"
return a/b-c
};
var argument7 = {"242":"","h":126,"":"m(","1.702653220601827e+308":"]%*kt","p":""," ,H":9.89254614850745e+307,"9.71722630370935e+307":"K1t"};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = ""
argument9['-'] = {"*":655,"I":"qtq","t":"#69A","t7":969}
argument9[5] = ""
return a+b-c
};
var argument9 = null;
var base_0 = [893,460,893,783,843,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,460,893,783,843,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,893,783,843,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,893,783,843,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test874.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)