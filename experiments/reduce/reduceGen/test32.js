





var callbackArguments = [];
var argument1 = null;
var argument2 = 1.4929599301427774e+308;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ""
base_0[2] = ["!",">","P","5","o:","H","`8","+,g"]
return a*b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = {"0":"","25":"","122":5.433424559864274e+307,"403":"v","":1.723007478615662e+308,"1.4991736217956936e+308":59,"1.2229872988594978e+308":-1}
return a*b+c/d
};
var argument6 = 1.3032107483027572e+308;
var argument7 = {"1.2913749474805524e+308":"","ab":969};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.1277822633002616e+308] = false
argument9[1] = null
base_2[0] = true
return a/b*c+d
};
var argument9 = {"126":9.953078011999963e+307,"714":"","":49,">1":"(","9.498495708341228e+306":126,"1.3944677125637613e+308":82};
var argument10 = r_1;
var argument11 = r_2;
var argument12 = r_0;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 4.1929327781321504e+307
return a*b/c-d
};
var base_0 = [969,"i","q","e","<","m{Q18",59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"i","q","e","<","m{Q18",59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,"i","q","e","<","m{Q18",59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,"i","q","e","<","m{Q18",59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test32.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)