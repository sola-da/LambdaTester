





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [-0.07293224808028298,0,0,"Í»"]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 1.5951294046829378; };
var argument4 = 157;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = false;
var base_0 = [893,843,82,823,655,122,655,627,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)