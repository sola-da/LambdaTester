





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"G'«\u0005\u0004]\u0001F":-0.45020743750647174,"Y@»L":"ï","«¦ ýr¯":0,"±.¥-Ñ&":-6.186369735532621,"Éî":0,"£":true,"öÖ":true,"ë":26.93884025661971,"Ky\u000bÃÇë¡":true,"òÝk\u0017{\u0011J¬Ó":-76.25032140248423}; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "Ìi\\°¨1ô:"; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -55.19800644401589; };
var argument6 = r_0;
var argument7 = "]";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = r_1;
var base_0 = [618,655,0,893,618,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,655,0,893,618,705]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,655,0,893,618,705]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,655,0,893,618,705]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test203.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)