





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"ü-Za#¹ûóÖé":0,"mXª  V":false,"!":8.716130593054476,"JÔ:0H\u0005Ã":true,"Q":24,"þXa":12}; };
var argument2 = false;
var argument3 = ["R26","X","C","C","^"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [null,0.3771622970310933,true,0,null,-6,35.46449452394875,"^Ò¾u"]; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 24; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [122,655,126,59,25,403,-1,403,627]
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
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test650.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)