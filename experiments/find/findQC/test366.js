





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -66.25434972465956; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 21.170594783614362; };
var argument3 = "";
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -33; };
var argument6 = ["H*D,","h","Y","^","zw"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "à"; };
var base_0 = [213,82,823,59,122,126,655,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,82,823,59,122,126,655,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,82,823,59,122,126,655,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,82,823,59,122,126,655,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findQC/test366.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)