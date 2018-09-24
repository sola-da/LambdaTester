





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -83.9251105362018; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [0.6592635362366701,true,true,null,[0,false],null]; };
var argument4 = true;
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = true;
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return [0.5390838188918783,-0.08663725734340177,true,0.11691161504398306,true,null,-8,[false]]; };
var argument10 = null;
var argument11 = r_0;
var base_0 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*o7","K","c_","i&","q","Rv","@D","N","z%z"]
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
require("fs").writeFileSync("./experiments/some/someQC/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)