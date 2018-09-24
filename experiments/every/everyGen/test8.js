





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = "3b,A,18+_dr"
base_0[3] = ""
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"1.0775160301503854e+308":1.017958564166396e+308,"7.068881771144695e+307":8.649202771077554e+306,"5.168913017509908e+307":"","":1.2559538218849188e+308}
return a*b/c
};
var argument3 = {"25":8.98871574105561e+307,"595":"","$d":242,"":"6","=":"u","A":59};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = [595]
base_2[6] = {"59":"h<","9.068847023305148e+307":2.3475892365588226e+307,"JVF8}":"l!"}
return a+b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [0,59,627,49,0,627,714,714]
return a*b+c
};
var base_0 = [969,"$",893," X9",618,"q|",-100]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"$",893," X9",618,"q|",-100]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,"$",893," X9",618,"q|",-100]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,"$",893," X9",618,"q|",-100]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test8.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)