





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -79.00970173059171; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -69.41191274858963; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = {"460":"I","":"","1.7064459301749735e+308":"","7.0333299288593e+306":6.522405775467828e+307,"el":"","1.5695376371254521e+308":":(rFHu2;"};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = {"59":1.0045274766620314e+308,"893":""};
var argument9 = false;
var base_0 = ["#","@","T","X|","l","]=G"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","@","T","X|","l","]=G"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","@","T","X|","l","]=G"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","@","T","X|","l","]=G"]
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
require("fs").writeFileSync("./experiments/every/everyQC/test281.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)