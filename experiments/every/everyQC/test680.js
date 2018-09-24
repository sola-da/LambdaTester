





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "þ p\u001cØ\u001as|"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [null,0,null,true,true,-1]; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = ["H","e"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = true;
var argument7 = null;
var base_0 = ["*","F","PE","x"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*","F","PE","x"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*","F","PE","x"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*","F","PE","x"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)