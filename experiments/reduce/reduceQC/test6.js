





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = 1.4356035578963769e+308;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = false;
var argument5 = {"0":"B","M":"x","":"","|":1.366334416165349e+306,"2.009102217549682e+307":"","h&":"ue"};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -45; };
var argument7 = r_1;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -64; };
var argument9 = null;
var argument10 = true;
var base_0 = ["^T","AG","Yo{","Z","a(X%9","+jy"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^T","AG","Yo{","Z","a(X%9","+jy"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^T","AG","Yo{","Z","a(X%9","+jy"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^T","AG","Yo{","Z","a(X%9","+jy"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test6.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)