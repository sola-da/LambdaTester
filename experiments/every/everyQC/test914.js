





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.33272901786673814,0,null,"UPv"]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -46.05238071279017; };
var argument3 = r_1;
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 20; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 92; };
var argument7 = null;
var argument8 = null;
var base_0 = ["5zRt","&1|((","#"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5zRt","&1|((","#"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5zRt","&1|((","#"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5zRt","&1|((","#"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)