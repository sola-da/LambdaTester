





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = 8.073396066444322e+307;
var argument3 = [25,-100,">"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -21; };
var argument5 = {"9":"FWv9","618":"{d,","R_6}":1.0839412254275045e+308,"6.057992580806615e+307":1.7055360203662907e+308,"":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = {"705":0,"6.872964727311885e+307":"*jYU","":6.509093929888981e+307,"1.1647825849743227e+308":607};
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [595,49,595,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,49,595,242]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)