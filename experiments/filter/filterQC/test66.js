





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -73; };
var argument2 = {"3":",s>H","":""};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = "uN";
var argument6 = ["+","SD)","Zr","XML"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 3.2947227655641287; };
var argument8 = null;
var argument9 = false;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return -67; };
var argument11 = null;
var base_0 = ["7","fo","("]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7","fo","("]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7","fo","("]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7","fo","("]
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
require("fs").writeFileSync("./experiments/filter/filterQC/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)