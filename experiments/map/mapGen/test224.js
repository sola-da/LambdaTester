





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"59":"a","893":213,"":2.2555357605794383e+307,"?":1.0093245514281453e+306,"tAxt":"Oi"}
argument2[49] = [893,607,0,242]
argument2[0] = null
return a-b/c
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
return a-b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = ""
argument7[4] = "_<JM"
argument7[6] = 122
return a*b-c
};
var argument7 = ["C","V",655,126,"f",893,823,"Q!6"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[157] = 1.3128382271797021e+308
argument10[893] = [893]
return a-b/c
};
var argument9 = {"9":1.5539425816593359e+308,"49":969,"1.7466987971606799e+308":"u","1.769587227829315e+308":893,"h":"","v":"#","2.4784805751328714e+306":607};
var argument10 = {"0":1.7587274721365938e+308,"100":3.533081230473843e+306,"403":1.843660274736881e+307,"460":"","3lU":5.09837045847676e+307,"":"","%h":"","5.344331241360991e+307":"d%V,"};
var base_0 = [0,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test224.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)