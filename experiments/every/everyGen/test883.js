





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][1.5144566325729397e+308] = null
argument2[1.268696794505825e+308] = ["C","J5",";",",","l{!","8r|fB","D"]
argument2[122] = {"2.116061313756254e+307":"","":1.6634588394005558e+308,"noE":705,"5.729116729663821e+307":"","OS":1.1115893330776428e+308,"-1":""}
return a+b+c
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.960033715165713e+307] = {"100":1.2598920391430974e+308,"714":607,"6.004903091608741e+307":1.0458440460996785e+308,"":"rCg@n^$>_TDo","4.960600759376084e+307":59,"1.2980112215502624e+308":"","9.725482582801326e+305":"",":B":"","wW@M":-100}
argument5[1.6706143966770798e+306] = null
base_1[0][1] = [893]
return a/b*c
};
var argument5 = r_0;
var argument6 = {"843":"i"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = 122
return a-b+c
};
var argument8 = r_0;
var argument9 = r_1;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = {"893":"","969":1.1037522258545067e+308,"7.876919883645133e+307":0,"v":9.065676622299332e+307,"sCr":8.186080484170834e+307,"4.504143364735348e+307":"4","5.539639320697592e+307":""}
argument12[1] = null
return a*b+c
};
var argument11 = false;
var argument12 = null;
var base_0 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Gw","H","Yff","N","CQ","J","Y","Z;Y@t","<|-","$;7I"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test883.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)