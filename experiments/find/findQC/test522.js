





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,true,true,null,3.536159123022923,-24,"íÐ"]; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 78.00637452400268; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = false;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [false,false,true,-8]; };
var argument9 = false;
var base_0 = ["ll","!","a","+","u","BY;E"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ll","!","a","+","u","BY;E"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ll","!","a","+","u","BY;E"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ll","!","a","+","u","BY;E"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test522.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)