





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 72; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = false;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 28; };
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "Õ^qNòû^ê\u0004"; };
var argument10 = false;
var base_0 = [242,705,618,705,0,714,460,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,618,705,0,714,460,618]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705,618,705,0,714,460,618]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,705,618,705,0,714,460,618]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)