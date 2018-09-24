





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -48.461111565590876; };
var argument2 = null;
var argument3 = [783,627,-1,25,969,25,122,783];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -3; };
var argument5 = r_0;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [null,-0.15686423962134177,1,-1.8882294382278992,7.484164955802363,null]; };
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -52.18312740976438; };
var argument10 = 4.154531278103541e+307;
var argument11 = false;
var base_0 = [5e-324,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,655]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,655]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,655]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyQC/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)