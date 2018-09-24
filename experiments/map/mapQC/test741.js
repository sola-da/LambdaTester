





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = [618,607];
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 83; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 29.299200914932676; };
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"è¿Ñ9":true,"\u0002#iTB\"Å":-0.9410349669011562,"â¢}êW_}N\n":"Ñ","|":5.464275408721586,"Ï'\u001b\u001dx#ú":12.588609830630974,"¾ºz":10.206463865066596}; };
var argument9 = null;
var base_0 = [627,655,0,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,655,0,122]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,655,0,122]
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
require("fs").writeFileSync("./experiments/map/mapQC/test741.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)