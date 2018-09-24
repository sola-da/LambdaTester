





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"ÝWPÝEôUM":[],"!¼\u0013":-2.229834130643023,"bPï´É¸*":false,"$g¸DAEa":10,"w]cd\u001c\u0017·sÒ":-2,"0ç«ÎÜ3jðO":{"^æ\u0003":0,"9«\u0006":false},"E":-39}; };
var argument2 = true;
var argument3 = {"705":7.507305959307483e+307,"8.258801618386331e+307":126,"":";2","W<oOw4w":"%"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = "$J";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = r_0;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 93; };
var base_0 = ["Y","y","0","CDR","($"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y","y","0","CDR","($"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y","y","0","CDR","($"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test944.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)