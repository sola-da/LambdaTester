





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return {"ùé":-0.6534741725430258,"ÞTª\bNô":0,"/*\u0014k§ãú®Æ":[],"\u001aç4":15.596281247935877,"UAr­\u0003¶\u001eÌ]":-12.265873113998849,"gÄ":false,"P]f":true}; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 20.133285728978834; };
var argument4 = 7.979448169369819e+307;
var argument5 = "8";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [-0.03825808281862453,0,false,-3.9393947211533904,true,true,{"¼=Ë":"¹"," \u00047D\f":true,"¬":false},48.42266989795585]; };
var argument7 = "";
var base_0 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E","?LS{J","9","Y","Y","J","g","?","2"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test294.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)