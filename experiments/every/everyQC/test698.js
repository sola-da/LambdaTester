





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -33.246224716452424; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = null;
var argument4 = "k";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 86.20525410704131; };
var argument6 = [25,100,100,403,705,126,969,157,823];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"F%®®v8\u001a":"\u000f","c":[],"Êç\u00128¼Hþ]":0.45380048592913425}; };
var argument8 = false;
var argument9 = "lN";
var base_0 = [823,607,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,607,893]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,607,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,607,893]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)