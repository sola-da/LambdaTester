





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [";%:Y","(","l","*","|P","_","<","zf","{"]
return a/b*c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = false
base_1[2] = true
return a/b+c
};
var argument5 = {"25":893,"59":"","705":"","969":"","K":"t","4.919251149388026e+307":"G","U#":"","=":627,"":"k"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
argument6[3.377960715099946e+307] = true
argument8[4] = "9"
return a*b*c
};
var argument7 = 1.238344720667153e+308;
var argument8 = "V8";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"242":1.0842621837709848e+308}
argument10[8] = ["_D*<","]","|","K","g","Em9BH"]
return a+b*c
};
var argument10 = r_0;
var argument11 = {"0":25,"25":8.884115110299682e+307,"5.396120403923176e+307":969,"1.6132214699012676e+308":2.9189636035360856e+307,"9.845170366352209e+307":"","6.953509754330277e+307":"","":"","1.1493780975395038e+307":705};
var base_0 = [49,5e-324,126,893,-100,-100,607,59,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,5e-324,126,893,-100,-100,607,59,627]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,5e-324,126,893,-100,-100,607,59,627]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,5e-324,126,893,-100,-100,607,59,627]
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
require("fs").writeFileSync("./experiments/find/findGen/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)