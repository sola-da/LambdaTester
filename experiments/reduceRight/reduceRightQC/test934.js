





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 86.05229852101834; };
var argument2 = null;
var argument3 = 213;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -58; };
var argument5 = "R";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = r_2;
var argument8 = "1";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return {"o\u0012O¥\r·":true,"Å":0,"\u000b":1.9511827906529753,"9{kª+?q":-3,"_s":false,"vîu>Y®q\u0017Á":-28,"Gû 1×¿¦\u0002":{"2I§\u0012¢z":[],"º\u00032Â":0,"2y!¥|":0,"r":")"},"\u001aÂÕÆåÆê-":true}; };
var base_0 = [0,242,627,618,823,705,823,100,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,242,627,618,823,705,823,100,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,242,627,618,823,705,823,100,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,242,627,618,823,705,823,100,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test934.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)