





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 85; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 83; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "Þ\"\fç"; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 16; };
var argument8 = r_1;
var base_0 = [714,122,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,122,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,122,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,122,893]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test778.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)