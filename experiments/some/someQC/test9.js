





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = 9.761941018035852e+307;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 31; };
var argument5 = {"122":595,"460":"","607":"wYSgn*","783":2.3631158592004544e+306,"":"","1.5120010787817552e+308":";vU","1.727040507346682e+308":82};
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"å|\u0001êDá°)":0,"Yp|´\"ï ¼":0,"/¼":true,"\u0006\u0015\u0006U§Ù\u0005":-0.6442234609141091,"9Ú\b]":true,"\b+Ã\nKÂ":13.154848724787266,"\u001e¨¥²Ó\u0002":48,"ác*\t\u0001_8lk":true," \u0014(\u0019=<":{"PYb":0.35451607130864615,"HO":1.3233988188595784,"Øl^\u0010¬":0.17381745398409953,"áó":-14,"¼ÀaêÀÛÖS":5}}; };
var base_0 = ["=h9Ww","Lw","|",122,607,157]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=h9Ww","Lw","|",122,607,157]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=h9Ww","Lw","|",122,607,157]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=h9Ww","Lw","|",122,607,157]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test9.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)