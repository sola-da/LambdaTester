





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 86.64493287636459; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 64; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -16.25959409927289; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "\u0002)­"; };
var argument8 = [25,893,59,823,157,460,242,157,655];
var base_0 = [618,"q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"q"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"q"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)