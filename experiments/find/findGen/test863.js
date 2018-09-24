





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AO?'] = {"618":"","":"Z","5.096386750268163e+307":-100,"1.6256675926668614e+308":"","1.7282782518608583e+308":893,"1.2863985178260466e+308":""}
argument3[783] = {"4":"","823":"","893":25,"":"+Y"}
return a-b/c
};
var argument2 = r_0;
var argument3 = 82;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = false
argument5[8.748669805137695e+307] = [126]
base_1[7] = true
return a-b-c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = {"82":1.7222318046216104e+307,"655":2.4309475713051575e+307,"893":893,"":4.627478754706982e+307,"C_":705,"7.182791666948736e+307":1.1871328222947775e+307}
return a/b+c
};
var argument7 = r_0;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = ""
argument11[100] = false
argument11['^h'] = null
return a*b-c
};
var argument10 = null;
var argument11 = r_3;
var base_0 = ["G","3","3","z","g","1","4t","}YG&a"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","3","3","z","g","1","4t","}YG&a"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","3","3","z","g","1","4t","}YG&a"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","3","3","z","g","1","4t","}YG&a"]
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
require("fs").writeFileSync("./experiments/find/findGen/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)