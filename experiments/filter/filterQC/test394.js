





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = null;
var argument3 = ["puf","TT","bqxq5)!+","o:J3"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 86.11351121358581; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"÷":0,"O²ÿ\u0014çGø|;":-0.10550656009365755,"îqUU":-2.973231994515923,"*ÚßrÄò¨":-2.1192369850925648,"\\.\u000e":true,"°þDõ\u000e«Ê¨":false,"±ØÚ\u001f$\u000ev":-4,"¯ooù":16.44256375435086,"ÖX_\\Dr":""}; };
var argument8 = null;
var argument9 = [49,126,0,705,627,893,0,843];
var base_0 = [460,"9J&",655,"y",843]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)