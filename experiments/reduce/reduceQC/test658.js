





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -39.493743981471496; };
var argument2 = [783,49,49];
var argument3 = [5e-324,403,893,403,783,655,157];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = 82;
var argument9 = [0,595,595,100,607,783,157,823,213];
var base_0 = ["vO",595,714,"[0","$F","J","n<"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vO",595,714,"[0","$F","J","n<"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vO",595,714,"[0","$F","J","n<"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vO",595,714,"[0","$F","J","n<"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test658.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)