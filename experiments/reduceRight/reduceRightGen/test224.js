





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = null
return a+b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = [242,969,82,460,460,242,1.7976931348623157e+308]
argument3[5] = [")M","?","cB","e","yK","iCP",")tAxt"]
argument4[1] = 460
return a*b+c*d
};
var argument3 = {"403":1.592499731865572e+307,"KY`pKPHNw^D":"","5.73453312688609e+307":25,"3.871869015654619e+307":"","!Ae08":1.5098788893756186e+308};
var argument4 = {"126":1.385277064050844e+308,"":655,"Zf":"M","1.7004594008779321e+308":"","?i":1.5219355364265078e+308};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['8('] = 1.255449171232607e+308
argument6['v'] = {"9":1.5539425816593359e+308,"49":969,"1.7466987971606799e+308":"u","1.769587227829315e+308":893,"h":"","v":"#","2.4784805751328714e+306":607}
argument5 = {"0":1.7587274721365938e+308,"100":3.533081230473843e+306,"403":1.843660274736881e+307,"460":"","3lU":5.09837045847676e+307,"":"","%h":"","5.344331241360991e+307":"d%V,"}
return a+b*c*d
};
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['^N'] = -1
return a-b+c+d
};
var argument9 = 8.776173320484915e+307;
var argument10 = {"595":783,"3.665470948271016e+307":"","@":1.4418674147507953e+308,"QEI":25,"QHdE":595};
var base_0 = [82,969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,969]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test224.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)