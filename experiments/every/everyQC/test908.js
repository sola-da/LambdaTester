





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -66; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "\rð{"; };
var argument3 = r_0;
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -48.670879533617175; };
var base_0 = [618,823,823,618,460,714,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,823,823,618,460,714,157]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,823,823,618,460,714,157]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,823,823,618,460,714,157]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test908.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)