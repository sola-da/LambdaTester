





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"¢\nÿÀC²¾CÕ4":0,"ë5~vu¥ù":true,"-\u0011":"6ß","É\u001f\u0014áVùÌ":"","ñÜ\u0017Ïà\u0019":[false],"ÛÏ":[null,null],"Ñ_ÖZ¡¾":""}; };
var argument3 = r_1;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -32; };
var argument5 = false;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "t:"; };
var argument8 = "P";
var argument9 = r_1;
var base_0 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test910.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)