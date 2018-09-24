





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = true;
var argument4 = {"9":1.5539425816593359e+308,"100":1.1286612133093665e+308,"618":"?i","1.5219355364265078e+308":242,"1.264121245536049e+308":"","1.4881952689930832e+308":"","1.4983859505596397e+308":1.7875286144346197e+308,"1.3403385710515657e+308":"","h":""};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = null;
var argument7 = r_2;
var argument8 = function callback(){callbackArguments.push(arguments)};
var base_0 = ["Zc","o7","#","<JM","08","C","V"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Zc","o7","#","<JM","08","C","V"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterEmpty/test567.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)