





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -74.91249470453796; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -40; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = 1.4150809572892307e+308;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -85; };
var base_0 = ["c","C","ErF","2oG","b","It","$pl","EtZd*]","6VQa","@"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c","C","ErF","2oG","b","It","$pl","EtZd*]","6VQa","@"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c","C","ErF","2oG","b","It","$pl","EtZd*]","6VQa","@"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c","C","ErF","2oG","b","It","$pl","EtZd*]","6VQa","@"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test992.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)