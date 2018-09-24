





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 65.5680737644912; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = null;
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"_,F¸ÛÄ\f":true,"£º\u0012­\u001aû\u0001ð":false,"Í¢\u001c\b¼V¸¦\n":1.548175142796902,"<¥­1":false,"\u0005¹2æ´õ":[],"Ñ±":"A","ù\u0018":5.6917327667326285,"\u0012ßö©&¿Ún":true,"Öë":false}; };
var base_0 = [-100,"f",213,"U",242,0,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,"f",213,"U",242,0,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,"f",213,"U",242,0,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,"f",213,"U",242,0,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test693.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)