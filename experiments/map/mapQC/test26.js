





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "éÞ¸\u0001øJ»ÏÂ"; };
var argument2 = true;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [-0.8697018167149144,true,-1.9090651739480213,4]; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = -100;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "æª\u001f\u0016áÿýÏ"; };
var base_0 = [-100,893,"<Og"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,"<Og"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,"<Og"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test26.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)