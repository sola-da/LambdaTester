





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = false;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = 100;
var argument5 = r_1;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = r_1;
var argument8 = r_1;
var argument9 = function callback(){callbackArguments.push(arguments)};
var base_0 = [893,1.7976931348623157e+308,823,82,100,100,823,823,25]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,1.7976931348623157e+308,823,82,100,100,823,823,25]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,1.7976931348623157e+308,823,82,100,100,823,823,25]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,1.7976931348623157e+308,823,82,100,100,823,823,25]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test359.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)