





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 9; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -1.696626103562049; };
var argument4 = [49,893];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -18.345714560021385; };
var argument6 = null;
var argument7 = r_0;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -42; };
var base_0 = [627,-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test982.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)