





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -2.2888860923024668; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 49; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -74.68144611265298; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 93.18298392077911; };
var argument5 = null;
var argument6 = null;
var base_0 = [714,"t","0","U",893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"t","0","U",893]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"t","0","U",893]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"t","0","U",893]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyQC/test138.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)