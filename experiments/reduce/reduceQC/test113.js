





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = {"157":6.215426360305271e+307,"403":1.3569658157443155e+308,"655":0,"714":";","893":"R","8.644837808847209e+307":607,"":"lm2","^":7.495881670537716e+307,")":627,"-100":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = true;
var base_0 = ["W","|","S9","a","*","-_","hF","b","<P","dYV"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","|","S9","a","*","-_","hF","b","<P","dYV"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","|","S9","a","*","-_","hF","b","<P","dYV"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","|","S9","a","*","-_","hF","b","<P","dYV"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test113.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)