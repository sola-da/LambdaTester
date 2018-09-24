





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = ["V5)r","1","fjI4$","F"];
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = true;
var argument8 = {"-100":1.66274190527899e+308,"9.1199215477536e+307":242};
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = null;
var argument11 = ["D{>]","0","}V","@w","FF","&K","w","W"];
var base_0 = ["aZj","}","C","4","B","o","(","*Q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["aZj","}","C","4","B","o","(","*Q"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["aZj","}","C","4","B","o","(","*Q"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["aZj","}","C","4","B","o","(","*Q"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)