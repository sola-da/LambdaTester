





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 56; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 87; };
var argument5 = "ljQ";
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var argument9 = 59;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return "G\u0014V>z¨vê"; };
var argument11 = null;
var base_0 = ["O","5jSJ}","i"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","5jSJ}","i"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test973.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)