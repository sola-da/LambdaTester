





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -70.60763602972702; };
var argument2 = 9.761941018035852e+307;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = {"122":595,"460":"","607":"wYSgn*","783":2.3631158592004544e+306,"":"","1.5120010787817552e+308":";vU","1.727040507346682e+308":82};
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ªd§\rÖÂÚ"; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["=h9Ww","Lw","|",122,607,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=h9Ww","Lw","|",122,607,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=h9Ww","Lw","|",122,607,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test9.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)