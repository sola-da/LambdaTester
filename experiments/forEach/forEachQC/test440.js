





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,false,-3,5.527834539410582,null,"â",null,null]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [[],0,[],"b",null,12,null,false]; };
var argument3 = true;
var argument4 = 1.0302428570304664e+308;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -16; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = true;
var argument8 = false;
var base_0 = [893,-100,-100,618,627,714,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100,-100,618,627,714,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100,-100,618,627,714,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100,-100,618,627,714,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test440.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)