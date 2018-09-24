





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"122":"","242":"","705":"3&%","783":1.646192087282318e+308,"RRB^eB,":"[","_":"","2.5970584997368426e+307":"5i","4.783691957245434e+307":25,"7,":"","":""}
argument2[213] = 1.3315607723782757e+307
base_0[0][0] = "?"
return a*b+c*d
};
var argument2 = ["Y4wZs","!",")M$v","q8","{Z","*1o","F,D"];
var argument3 = true;
var argument4 = ["+","*","HZ","p","Z","R4","e",",XQ","q","pI"];
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 1.1801047141317094e+308
base_1 = null
base_1[9] = false
return a-b+c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['*c'] = 460
base_2[2] = true
base_2 = 714
return a-b*c+d
};
var argument9 = null;
var argument10 = r_0;
var argument11 = null;
var argument12 = [0];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7] = {"213":893,"714":"","893":618,"1.5495267984680756e+308":"H","1.488259820483619e+308":"","1.7502146023820127e+308":1.5434801009989745e+308,"":"","8.04990310495041e+307":-1}
argument12[25] = ""
argument11[7.463432409233234e+307] = null
return a*b-c+d
};
var base_0 = ["3","2K","vG_D5Az=","n","N","V"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","2K","vG_D5Az=","n","N","V"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","2K","vG_D5Az=","n","N","V"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","2K","vG_D5Az=","n","N","V"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test279.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)