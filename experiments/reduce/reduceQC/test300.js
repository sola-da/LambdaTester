





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -51.73419825594876; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -95; };
var argument5 = {"100":"","655":5.616971857353948e+306,"":","};
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = r_2;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "#ÅéÄ\u0019"; };
var argument10 = false;
var argument11 = {"607":1.0750304475033423e+308,"893":1.1485996393056065e+307,"7.775649032182054e+307":"","2.984912599079493e+307":"jY","yk#$":"e","":460,"4.2700030228200026e+307":595,"1.3595908850281993e+308":""};
var base_0 = [-1,627,823,213,783,100,607,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,627,823,213,783,100,607,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,627,823,213,783,100,607,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,627,823,213,783,100,607,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test300.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)