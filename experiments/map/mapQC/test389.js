





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "b­½ìÿ\u0014·"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = {"242":1.4448343605685094e+308,"618":-100,"783":"","-100":"k2","":59,">":1.2979519088717899e+308,"1.5813000618784656e+308":25};
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 76.28288639560803; };
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = 2.4419818825128163e+307;
var argument10 = {"49":8.089552239302956e+307,"843":"",",":"x`Ug","":1.4501432349089575e+308,"1.1313138721211613e+307":""};
var base_0 = [",MuK"," ","E","U",25,"H","ZJ",82,"M","C"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
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
var base_3 = [",MuK"," ","E","U",25,"H","ZJ",82,"M","C"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)