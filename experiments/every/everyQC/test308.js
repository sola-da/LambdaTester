





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 68.57033579626123; };
var argument3 = 6.548420879923111e+307;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"¥Ì\\§Óæ&+":true,"¸":0.0411524120405784,"Ýá·®ÍW;":-3,"½Ç}Ãõ":true,"\u0012ß+3\u0012 a":true,"î(":"\u001f","ÀòCÊ\\\u0004":14.176884355366816,"Û":false,"\u000b½ª4Å":-50}; };
var argument5 = [0];
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C>*","sm2","1d","s","y","G","J","I","M?0"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)