





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = ["1",893];
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = "";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -58.99944377410702; };
var argument7 = r_1;
var argument8 = ["p","c","O","-k"];
var argument9 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument10 = [655,843,843,783,595,460,213];
var base_0 = ["f","pn","B&","a","o","<","]N#:","p"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f","pn","B&","a","o","<","]N#:","p"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f","pn","B&","a","o","<","]N#:","p"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f","pn","B&","a","o","<","]N#:","p"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)