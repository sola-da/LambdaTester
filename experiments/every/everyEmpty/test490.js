





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = ["U)",1.7976931348623157e+308,"&","9?"];
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = null;
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = 3.6300353159027895e+307;
var argument7 = r_2;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = false;
var argument10 = r_3;
var base_0 = ["g",242,1.7976931348623157e+308,783,100,403,126,25]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g",242,1.7976931348623157e+308,783,100,403,126,25]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g",242,1.7976931348623157e+308,783,100,403,126,25]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g",242,1.7976931348623157e+308,783,100,403,126,25]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test490.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)