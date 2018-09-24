





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 15; };
var argument2 = r_0;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 9.56502433558233; };
var argument5 = r_0;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"0ëEYCsj":0}; };
var argument7 = false;
var argument8 = {"893":1.483726612728617e+307,"":1.4007890732929021e+308,"j":"%|"};
var argument9 = function() {
 callbackArguments.push(arguments) 
 return {"2":false,"kÔvklb)":true,"´zCõ\u0004T·":false,"2Ò8Æ":false,"¥\u001a\u0000\u001f¢h±ä":-6,"\u00078":"ö","å":-43.84009611646337,"xë":36,"ã\u0014ì":-41}; };
var base_0 = ["hdnC=B","<","geK}"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hdnC=B","<","geK}"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hdnC=B","<","geK}"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hdnC=B","<","geK}"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)