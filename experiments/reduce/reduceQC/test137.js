





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -20.250642940090803; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"v¿ö³êywÿ":0,"qAêÁ":0,"@\u0007¤ÔJUÉ":false,"-^3Ed":0,"~":{"\u001cå":0.46458228235346555},")":-10.601006683659387,"\u0019A\u0006f¦¼":34}; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -85; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -53; };
var argument6 = true;
var argument7 = 1.2282002707597983e+308;
var base_0 = [655,607,"{|","|","ShN",242,"HW*","Mk)kw","&[ ^u"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,607,"{|","|","ShN",242,"HW*","Mk)kw","&[ ^u"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,607,"{|","|","ShN",242,"HW*","Mk)kw","&[ ^u"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)