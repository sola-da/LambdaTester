





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = true;
var argument5 = true;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = -1;
var base_0 = [714,969,823,403,595,783,126,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,823,403,595,783,126,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,823,403,595,783,126,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,823,403,595,783,126,655]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightEmpty/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)