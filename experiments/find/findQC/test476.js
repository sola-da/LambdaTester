





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¬\u0005³ò\u0003\rÂPõ9"; };
var argument2 = r_0;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = false;
var argument8 = {"893":1.483726612728617e+307,"":1.4007890732929021e+308,"j":"%|"};
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["hdnC=B","<","geK}"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hdnC=B","<","geK}"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hdnC=B","<","geK}"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hdnC=B","<","geK}"]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)