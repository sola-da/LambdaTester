





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"4":"","403":213,"893":"","2.5047152009783803e+307":5.96680901313545e+307,"*H:":"M",";fU":"","1-^":6.404927321759736e+307,"ZBx":1.7596879381036579e+308,":":"!"}
argument2[4] = null
return a-b-c+d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [627,242,126,242,100]
return a+b-c-d
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ""
argument7['w'] = 4.882776474077801e+306
argument8[3] = ["Si","5*&","dy?*z"]
return a+b*c*d
};
var argument7 = r_1;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = false
argument11 = {"49":157,"$":2.1922138419355846e+307}
return a-b-c/d
};
var base_0 = ["vGd,_OJ","JHVT","vr","<V","F[","_r","hg","N",")"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vGd,_OJ","JHVT","vr","<V","F[","_r","hg","N",")"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vGd,_OJ","JHVT","vr","<V","F[","_r","hg","N",")"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vGd,_OJ","JHVT","vr","<V","F[","_r","hg","N",")"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test123.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)