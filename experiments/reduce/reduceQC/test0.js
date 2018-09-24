





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 68.71385445168772; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_1;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [0,false,1.238751674403309,5.43751543394146,-5.606572537076804,0.3020395629640238]; };
var argument7 = r_0;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [-100,655,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,655,0]
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test0.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)