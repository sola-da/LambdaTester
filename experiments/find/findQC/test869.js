





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -82.45396098620408; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 93; };
var argument3 = "f";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "§p"; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 82.62183408703928; };
var argument6 = null;
var base_0 = [100,403,607,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,403,607,595]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,403,607,595]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,403,607,595]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)