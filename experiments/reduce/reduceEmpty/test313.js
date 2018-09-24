





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 1.2916830103566816e+308;
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"1.1167349273944368e+308":1.7245820920074183e+307};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"0":7.601630792837087e+307,"595":"","783":126,"893":"","":"'","-100":"","1.5839152669485746e+307":"T","1.0610074277964655e+308":"kr7LVO","e)Ej;":""};
var argument8 = null;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = "#u";
var argument11 = true;
var base_0 = [893,"$",-100,823,0,"0HpCp","Vf","6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"$",-100,823,0,"0HpCp","Vf","6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"$",-100,823,0,"0HpCp","Vf","6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"$",-100,823,0,"0HpCp","Vf","6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceEmpty/test313.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)