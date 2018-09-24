





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "pHm+yÅyÑ£$"; };
var argument2 = 49;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 94; };
var argument5 = {"5.268204077712129e+307":242,"`<":"dd"};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = [59,157,607,59,0];
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -8.739833975650967; };
var argument10 = r_2;
var argument11 = 8.567011521960799e+307;
var base_0 = [595]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyQC/test395.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)