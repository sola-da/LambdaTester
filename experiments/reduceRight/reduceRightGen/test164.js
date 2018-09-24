





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = [">=","v,","Zg","+","Osz","-t"]
return a+b+c+d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"`&":8.244729928575059e+307,"":0,"R":"e","w":1.7848221578101359e+307}
argument3 = 1.7687789586616457e+308
return a-b*c-d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = {"157":"(h","843":"","1.4742679172391725e+308":403}
argument7[126] = true
argument5[1] = false
return a*b+c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = ["F!F",100]
base_3[7] = 595
return a+b*c/d
};
var base_0 = ["36TF","&","zj&TL","qv","Uj","_S@:","r|?0","-","D ","N"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["36TF","&","zj&TL","qv","Uj","_S@:","r|?0","-","D ","N"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["36TF","&","zj&TL","qv","Uj","_S@:","r|?0","-","D ","N"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["36TF","&","zj&TL","qv","Uj","_S@:","r|?0","-","D ","N"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)