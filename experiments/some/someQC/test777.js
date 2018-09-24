





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"=§\u001c\u001d&]]Í\u0013\u0017":{"":-0.5282111520889337},"ýf°3¸0Z¦Ê":"O","\n":true}; };
var argument2 = [607,-100,460,1.7976931348623157e+308,893,1.7976931348623157e+308];
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = ["LX%[E",";5","jE",126,"$-",595,"lI","h","^T"];
var argument6 = ["c&",":p|","K","Uv0<","p"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ÙÇ6\u0005B×Vê"; };
var argument8 = [0,"eu",969,"U","-","TJ","H"];
var argument9 = null;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return -98.61029276744873; };
var argument11 = "z";
var base_0 = [843,126,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,126,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,126,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,126,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someQC/test777.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)