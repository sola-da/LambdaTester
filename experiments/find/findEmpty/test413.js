





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = "nV";
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = null;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = null;
var base_0 = [122,"-","7oDO","K_?_","gP"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"-","7oDO","K_?_","gP"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"-","7oDO","K_?_","gP"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"-","7oDO","K_?_","gP"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test413.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)