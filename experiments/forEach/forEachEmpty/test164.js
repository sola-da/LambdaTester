





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = true;
var argument3 = "Ytf";
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = null;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"100":"d9","460":"","":82,"5.615830258472743e+307":25,"1.1707740163161644e+308":"","Ti":1.7075275933755413e+308,"8.97419569308532e+307":"","1.1724422085591733e+308":460};
var argument8 = null;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = null;
var base_0 = [655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)