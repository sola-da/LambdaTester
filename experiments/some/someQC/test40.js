





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 5; };
var argument2 = true;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"NàÒ":0.06651538166833304}; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"øKÏë1Oü\u0011":true,"\t":-0.33241415373568817,"\u000f.":-4,"²ÚÕï©áç":true,"":"ëðV","A":63,"']L¨ÉòÚ":"5º"}; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = null;
var argument8 = true;
var base_0 = [242,893,100,714,627,213]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,893,100,714,627,213]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,893,100,714,627,213]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,893,100,714,627,213]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test40.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)