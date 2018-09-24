





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [true,null,0,null]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.9339681288546169,null,8,false,true,false,false]; };
var argument3 = r_1;
var argument4 = 1.4199797204466717e+308;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -49; };
var argument6 = 627;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = ["57"];
var argument9 = false;
var base_0 = ["oN","S","}","1X","8d64j","{#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oN","S","}","1X","8d64j","{#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oN","S","}","1X","8d64j","{#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oN","S","}","1X","8d64j","{#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)