





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 47.61629779748042; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -41; };
var argument4 = "";
var argument5 = {"":3.1741205267600205e+307,"1.5694318654500385e+308":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [893,627,"9W",-100,843,"qm","`:","ED,P","U"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,627,"9W",-100,843,"qm","`:","ED,P","U"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,627,"9W",-100,843,"qm","`:","ED,P","U"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,627,"9W",-100,843,"qm","`:","ED,P","U"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyQC/test562.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)