





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¬ÑDnK"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "ÒlíA"; };
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -77; };
var argument5 = false;
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var base_0 = [-1,"n%","f;"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"n%","f;"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,"n%","f;"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,"n%","f;"]
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
require("fs").writeFileSync("./experiments/find/findQC/test171.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)