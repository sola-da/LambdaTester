





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "]+,g";
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = r_0;
var argument6 = true;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = false;
var argument9 = {"0":"","122":5.433424559864274e+307,"403":"v","1.279634329636407e+308":8.387620600470592e+307,"":1.723007478615662e+308};
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = "";
var argument12 = [25,5e-324,893];
var base_0 = [157,627,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,627,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,627,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,627,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightEmpty/test89.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)