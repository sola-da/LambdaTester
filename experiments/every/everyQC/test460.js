





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 65; };
var argument2 = 6.957285929159473e+307;
var argument3 = [714,-1,49,893,5e-324,618,49,126];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = false;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 87; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 68; };
var base_0 = [25,49,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,49,460]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,49,460]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,49,460]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test460.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)