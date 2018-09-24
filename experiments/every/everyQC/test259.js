





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"áÑ\u000b%j ¼":true,"V©":0,"´\u001dÀñÌeg\\":true,";D>_ØMþ":-6,"®s\rá!+iT":-9.483068236246943,"kN":true}; };
var argument2 = false;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 81.11834931390456; };
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "2\u000b¹P¼Æ´5"; };
var base_0 = [49,1.7976931348623157e+308,122,157,627,5e-324,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,1.7976931348623157e+308,122,157,627,5e-324,607]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,1.7976931348623157e+308,122,157,627,5e-324,607]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,1.7976931348623157e+308,122,157,627,5e-324,607]
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
require("fs").writeFileSync("./experiments/every/everyQC/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)