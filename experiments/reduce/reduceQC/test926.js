





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "r[yê"; };
var argument2 = 8.073396066444322e+307;
var argument3 = [25,-100,">"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -63; };
var argument5 = {"9":"FWv9","618":"{d,","R_6}":1.0839412254275045e+308,"6.057992580806615e+307":1.7055360203662907e+308,"":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 56; };
var argument7 = {"705":0,"6.872964727311885e+307":"*jYU","":6.509093929888981e+307,"1.1647825849743227e+308":607};
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 27; };
var base_0 = [595,49,595,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,49,595,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,49,595,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,49,595,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)