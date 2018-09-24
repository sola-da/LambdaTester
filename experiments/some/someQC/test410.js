





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 63; };
var argument2 = null;
var argument3 = ["<","uth]","R","J","=","m","p]CiD`E"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = null;
var argument6 = 122;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = ["=+",")",595,618,607,783,823,242,"a&L,D","H"];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument10 = r_2;
var argument11 = r_1;
var base_0 = [":","o","h","Z0q;L5","*e"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","o","h","Z0q;L5","*e"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","o","h","Z0q;L5","*e"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","o","h","Z0q;L5","*e"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someQC/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)