





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = null;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"213":"","$XVT":"","1.3562076857143314e+308":1.6115959568470465e+308,"Ab":"j3K"};
var argument9 = {"":"e","-100":893};
var base_0 = [705,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test537.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)