





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = false;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = r_3;
var argument11 = null;
var base_0 = [893,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,607]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,607]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,607]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test69.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)