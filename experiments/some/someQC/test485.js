





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -15; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 93.01167545974135; };
var argument4 = [893,655,403,969];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [0,true,2,2,null,true,"Ö\u001f)q",-41.00754863439461]; };
var argument6 = "%";
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["l","Y","9","=2","h","$z%","^","l"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","Y","9","=2","h","$z%","^","l"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","Y","9","=2","h","$z%","^","l"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","Y","9","=2","h","$z%","^","l"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test485.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)