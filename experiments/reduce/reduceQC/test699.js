





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 44; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = "";
var argument5 = 1.4564013469155857e+308;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"ýæ\u0001ýrh":0,"Öè'\u0014IÛªö#":0,"â{`ù~à\fuM":false,"!Í\u0013ùÐ¨Ù3ù":-3,"\"":-10.595927268577263,"<\u001c*íµv":10,"BEE'(úoó³x":true,"è¿.&-;u":-45.866648271553785,"|éÁ^?m":true,"âp":-18}; };
var argument7 = {"100":823,"213":"ehX","460":1.6486421028132502e+308,"607":"","1.5784028129598612e+308":"dD","":1.1074254225837321e+307,"d":"G","#r":1.041806788712079e+308,"yTFIP!h":0};
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "ÖIÜ=hÞ"; };
var base_0 = [-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)