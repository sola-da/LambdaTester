





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "2)ºïN"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = 627;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 52.31293428680011; };
var argument6 = null;
var argument7 = [157,893,157,25,-1,-100,607,-1,460];
var base_0 = ["9","B","mlE9D","`","2","B","{","[","b"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","B","mlE9D","`","2","B","{","[","b"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)