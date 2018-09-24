





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 21.51774619771132; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"6.":0,"ÓÜ¥":false,"Ã&\u0019,B\u0015":"n"}; };
var argument4 = {"242":1.4448343605685094e+308,"618":-100,"783":"","-100":"k2","":59,">":1.2979519088717899e+308,"1.5813000618784656e+308":25};
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [0,true,-0.876926352381953,true,[0,0]]; };
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -16.856511637983118; };
var argument9 = 2.4419818825128163e+307;
var argument10 = {"49":8.089552239302956e+307,"843":"",",":"x`Ug","":1.4501432349089575e+308,"1.1313138721211613e+307":""};
var base_0 = [",MuK"," ","E","U",25,"H","ZJ",82,"M","C"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",MuK"," ","E","U",25,"H","ZJ",82,"M","C"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",MuK"," ","E","U",25,"H","ZJ",82,"M","C"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",MuK"," ","E","U",25,"H","ZJ",82,"M","C"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)