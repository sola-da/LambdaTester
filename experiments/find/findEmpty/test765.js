





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"627":714,"893":"","-1":"wu","B'5":"","":-100,"^>":"","SI*":"","1.447001375801038e+308":1.1446973942704105e+308,"8.028223200280866e+307":5e-324};
var argument6 = false;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = false;
var argument9 = function callback(){callbackArguments.push(arguments)};
var base_0 = [893,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,705]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,705]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)