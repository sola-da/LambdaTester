





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 85.71971313755267; };
var argument2 = [242,213,100];
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -15; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"9":true,"Ý\u0013½íô3":"","©":false,"_î\u0005pú¿Ð":false,"4Ú\u001b":false,"2*Ñ":0,"~ñ":-26.789223369645683,"ºß":4,"5º":22.059080235656296}; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = ["A","II"];
var base_0 = ["KXH","xn","N","8 ","m"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["KXH","xn","N","8 ","m"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["KXH","xn","N","8 ","m"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test338.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)