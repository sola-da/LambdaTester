





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = {"618":"M","893":-1,"969":"","":618,"h":"6c!","H?)r":1.7976931348623157e+308,"1.501504710884216e+308":403,"9.885192399648506e+307":"_"};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = 969;
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument10 = null;
var base_0 = [" ","l","PG[E","(:","N!+V","A"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" ","l","PG[E","(:","N!+V","A"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ","l","PG[E","(:","N!+V","A"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ","l","PG[E","(:","N!+V","A"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test601.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)