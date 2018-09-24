





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0.7319106895557985,"\u0001",1.4257032407816412,null,1.1867113092118728,-12.482655860676239,"e>?)\u0019",true]; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 27.177003930176614; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -60.4982181948426; };
var base_0 = ["6","7x","V","IgN","Y","^"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6","7x","V","IgN","Y","^"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6","7x","V","IgN","Y","^"]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6","7x","V","IgN","Y","^"]
var r_3= undefined
try {
r_3 = base_3.every(argument4)
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
require("fs").writeFileSync("./experiments/every/everyQC/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)