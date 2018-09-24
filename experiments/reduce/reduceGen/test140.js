





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = [627]
argument2[4] = ["|","T","3","*","n|n","]=I","?[R","g#ab"]
return a*b/c+d
};
var argument2 = {"893":"","3.457205355061488e+307":"!F",")'C}":"","1.62800425839493e+308":"P4z|","":595};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 5.660994083121864e+307
argument4 = true
return a/b+c*d
};
var argument6 = null;
var argument7 = "$";
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
base_2[0][0] = false
return a-b/c*d
};
var argument10 = null;
var argument11 = r_2;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 59
argument10[0] = {"607":"","969":"","2.565620433631354e+307":82,"":"","3.9054150212666927e+307":1.310791514206938e+307,"1.2168050379434671e+308":1.7005002865826185e+308,"N":"C","c-":1.8306857894324325e+307}
base_3[3] = {}
return a-b+c+d
};
var base_0 = ["]y_Ns4`&","O"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]y_Ns4`&","O"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]y_Ns4`&","O"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]y_Ns4`&","O"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)