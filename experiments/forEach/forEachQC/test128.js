





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¬¡VG"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 96; };
var argument6 = true;
var base_0 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test128.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)