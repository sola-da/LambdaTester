





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [false,[],1.9579303925744762,null,[false]]; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"p\u001b¿¥":"7\u0006","\u001e\u0018Õ\fð]$":-3,"ÓHñ{lMj":-20.1821465501067}; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 51.49364198312525; };
var argument7 = false;
var argument8 = 8.527906608458788e+307;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument10 = null;
var argument11 = null;
var base_0 = [783,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,25]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,25]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,25]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findQC/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)