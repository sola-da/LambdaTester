





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -15.59509877232037; };
var argument2 = null;
var argument3 = {"893":7.240280692924666e+307,"1.4048794121758451e+308":"","1.4528813035371673e+308":5.246456772914463e+307,"":6.938448406309804e+307,"p6MM":"r)","^":"F69!y"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [0,0,null,"Ú3W",false,22,null]; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 34.292747117414656; };
var argument7 = 2.0997240151026839e+307;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -64; };
var argument9 = [242,"kJ","1Z$","nT(Ry","ppT5"];
var argument10 = r_3;
var base_0 = [595,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,122]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,122]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test782.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)