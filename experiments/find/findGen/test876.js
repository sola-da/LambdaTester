





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ["&*(L","1","C","WB!,r","E","e|?","k","o","lc","0Y$S4v<`-8;"]
return a*b+c
};
var argument2 = {"A":"","Gw":"ZYff"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = [893,627,627,783,100,823]
return a-b-c
};
var argument4 = {"242":"","1.4241941914652385e+308":823,"K":":","1.1870754535431747e+308":"3","|":"","-F7^#5'":-100,":<u6":7.727236758318068e+306,"":"C"};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][6] = 2.833409366215887e+307
return a/b-c
};
var argument7 = 627;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = null
argument11[893] = {"1.7829438135679705e+308":"tgqy7}'","":"","0*":5.729116729663821e+307,"5.928618757810654e+307":"OS","1.1115893330776428e+308":"","1.6634588394005558e+308":-1,"1.157148852733071e+308":969,"1.0932394637875115e+307":1.5332078896656112e+308,"1.5589085693708857e+308":6.004903091608741e+307}
argument11[100] = false
return a-b-c
};
var argument10 = r_2;
var argument11 = ["Vc",714,"r","v","xN"];
var base_0 = ["1","d",714,100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","d",714,100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","d",714,100]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","d",714,100]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test876.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)