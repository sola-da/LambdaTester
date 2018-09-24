





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = {"25":"","49":"","655":"7","*":9.944717699730713e+307,"":"","1.0928980909311949e+308":7.080746991583843e+307,"2.349375789630748e+307":"","}y":595,"7.297655352336853e+307":"","7.805115187626627e+307":""};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "Iq\"´"; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = {"783":",60Y","893":"","":607,"-1":0,"4.846008732801714e+307":9.031516174333818e+307,"1.4832303116762043e+308":783,"ke4Yth":"","G":"Sm"};
var argument7 = "";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = true;
var argument10 = 213;
var base_0 = [627,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,242]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,242]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,242]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test725.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)