





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -8; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.9326767357728334,"\u001eý"]; };
var argument3 = "M";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"8":false,">ü¾vÃó+":-0.8949254900650612,"«»«":2}; };
var argument5 = {"213":4.06065835296461e+307,"":")","sl4ma":"","U":893,"1.5080089121973847e+308":-100,"w+1p":"","-1":"KH"};
var argument6 = 714;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ýtp¥«RÆé"; };
var base_0 = ["o","M"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","M"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","M"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","M"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)