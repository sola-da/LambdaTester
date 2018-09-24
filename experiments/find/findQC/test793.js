





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"`\u00027d¦¦àÂ5":0.2835510286374938,"Ëö\u0014Óñõ\u0000":0,"P[Ç\u0007QâéÅ":0.5936204374047307,"\u0003Ñ":[],"äN¦Ú":-3,"d*±\u0004":{"×çÝE":0.961219100854316,"~\u0003úÎ":"4","ó\u0017":-1,"z ,\u0014\u001f":-2.6795223461526723},"¦ÐX:FþÃ":-28,"ê Öq4Ñæ":true}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 31.644760229602475; };
var argument3 = [82,783,460,595,655,49,893,607,242];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -40.818452668445524; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = true;
var base_0 = ["A%",618,460,"R,)fH","gN"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A%",618,460,"R,)fH","gN"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A%",618,460,"R,)fH","gN"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A%",618,460,"R,)fH","gN"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test793.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)