





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -64; };
var argument2 = true;
var argument3 = [843,595,655,823,157,157,100,893];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "\u000b"; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [false]; };
var argument7 = 7.219538844228275e+307;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 27.48991839301196; };
var argument9 = {"3":-100,"122":"","403":"","893":1.4778739540322981e+307,"3.113408531711789e+307":-1,"8.177909796334979e+307":"","":655,"1.0361458382940152e+308":"+",",`":0,"c":4.1776460837663443e+307};
var argument10 = r_0;
var base_0 = [714,"V)","v","L"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
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
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)