





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return ["5",null,null,true,-14.032326191779813,false,false]; };
var argument4 = "n]IK";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -50.479129645029076; };
var argument6 = "J";
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = null;
var argument10 = "";
var base_0 = ["e-","=","U4",122,627,":",100,"d"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e-","=","U4",122,627,":",100,"d"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e-","=","U4",122,627,":",100,"d"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e-","=","U4",122,627,":",100,"d"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)