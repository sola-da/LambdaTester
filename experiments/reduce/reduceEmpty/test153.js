





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 595;
var argument3 = false;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = r_2;
var argument7 = r_0;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = {"49":"","843":1.2439341878418049e+308,"":"","kCK":"(h","vzB|tpI":1.402927968289737e+308,"1.1827069649447172e+308":618,"^ ":4.4263831996422995e+307,"1.717744259055842e+308":893,"UP":"j"};
var argument10 = {"595":1.2830894855614321e+308,"j":"","":"","?x":1.2940164662496843e+308};
var base_0 = ["$C","!:","e","Vz","]","}BLCX8"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$C","!:","e","Vz","]","}BLCX8"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$C","!:","e","Vz","]","}BLCX8"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$C","!:","e","Vz","]","}BLCX8"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceEmpty/test153.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)