





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = null
return a/b-c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [25,460,157,242,618,714,0,783]
argument4['L'] = {"":59,"7.268610432566646e+307":"rL0?X Y:","N4ale":969,"b":"","mw":4.944729324962551e+307,"9.73591721810837e+307":"A","1.7508843027402962e+308":"&8"}
return a+b+c+d
};
var argument4 = {"607":607,"705":607,"1.3192350111061488e+308":1.1431611887279405e+308,"W":"m>","":"","3.8120440085202614e+307":59};
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 7.708553568201821e+307
argument7[4] = {"0":6.697075915452084e+307,"595":"{","":"","w":100,"5.655675550202856e+307":893,"5.103877693947577e+307":59,"-1":1.1002492754848556e+308,"|B!e(w":";RDg"}
return a+b/c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[-1] = ["&","_pK6","-a}aN","%","`","N"]
argument8[1.738403780925446e+308] = {"8":"","1.4578247015479095e+308":893,"Ce":213,"S;":"u-^","9.853272981432464e+307":"k`7","FW":5.390187881902632e+307,"%T9X%=":843,"":2.360845517823921e+307,"2.384515420019512e+307":"","1.1862053489323019e+308":8.271902790562201e+307}
return a/b/c/d
};
var base_0 = [0,460,655,59,705,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,460,655,59,705,100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,460,655,59,705,100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,460,655,59,705,100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test375.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)