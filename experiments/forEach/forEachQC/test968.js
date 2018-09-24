





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "PØd/"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"ÿ/í\u0012}\u001aI²§":0,"¿î÷":0,"Þ¡}æä":2,"çÕÊ\u0015":true,"&ÿ0øK\u000e":false}; };
var argument3 = {};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -62.39804404493581; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = "";
var base_0 = [460,25,25,893,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,25,25,893,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,25,25,893,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,25,25,893,126]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test968.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)