





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return ["P",-0.4889846296542053,null,null,-2,15,null]; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 94.41893521634191; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = null;
var argument8 = r_2;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -98.41303948563377; };
var argument10 = r_2;
var base_0 = [">G","6","(","nBO",":","8Z","Aw","<;","u"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">G","6","(","nBO",":","8Z","Aw","<;","u"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">G","6","(","nBO",":","8Z","Aw","<;","u"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">G","6","(","nBO",":","8Z","Aw","<;","u"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test339.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)