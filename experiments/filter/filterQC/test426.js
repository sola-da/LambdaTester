





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,-0.7842035781830534,null,0.4836208815154994]; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = ["M","Zt?"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = r_2;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument9 = false;
var argument10 = [627,618,714,714];
var base_0 = ["xx:",",","e","`","4","Y","zL"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["xx:",",","e","`","4","Y","zL"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)