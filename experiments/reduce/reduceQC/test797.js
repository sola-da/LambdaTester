





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "ý\u0013Y²\t"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -65.29518953584468; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "\n\u000fÕaû\u0011"; };
var argument4 = r_1;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return " ÊÆ§Í"; };
var argument7 = r_1;
var base_0 = ["<Dv`X","|6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<Dv`X","|6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<Dv`X","|6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<Dv`X","|6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test797.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)