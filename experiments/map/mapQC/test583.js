





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 73; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [null,0.9286359552228851,null,null,4.364962081567402]; };
var argument3 = true;
var argument4 = [655,213,49,25,403,627,100,403];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 88.92395147477505; };
var argument6 = true;
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "]èð\u0014jJ"; };
var argument9 = null;
var argument10 = -1;
var base_0 = [893,595,242,783,595,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595,242,783,595,618]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595,242,783,595,618]
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
require("fs").writeFileSync("./experiments/map/mapQC/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)