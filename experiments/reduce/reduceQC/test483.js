





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¢þ\u0003¶j"; };
var argument2 = true;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 81.40098028785707; };
var argument5 = {"126":"gg1","460":25,"":607};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 7.557887345224024; };
var argument7 = false;
var argument8 = "R:b";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument10 = false;
var base_0 = ["$^",823,893,618,49,607,783,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$^",823,893,618,49,607,783,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$^",823,893,618,49,607,783,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$^",823,893,618,49,607,783,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test483.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)