





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = true;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 88.63458658949459; };
var argument5 = {"126":"gg1","460":25,"":607};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -86.14035402162668; };
var argument7 = false;
var argument8 = "R:b";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 36.209617665595516; };
var argument10 = false;
var base_0 = ["$^",823,893,618,49,607,783,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$^",823,893,618,49,607,783,213]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$^",823,893,618,49,607,783,213]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test483.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)