





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -6.929649918063219; };
var argument2 = "";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 19; };
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "aÝÅwÅ\u0001ÃB"; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [823,595,705,49,893,59]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,595,705,49,893,59]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,595,705,49,893,59]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,595,705,49,893,59]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)