





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = {"59":7.763249420448093e+307,"157":"","":"]","1.16854316670778e+308":"","V2_":1.2182049427834077e+308};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = [893,655,403,1.7976931348623157e+308,213,655];
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = false;
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = null;
var base_0 = [25,969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,969]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightEmpty/test514.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)