





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 93; };
var argument2 = "h";
var argument3 = [";mu","S","n8","k","["];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -18.748712866406315; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 37; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 55.68935049831181; };
var base_0 = ["{U!","2","%","e","0h8D","h"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{U!","2","%","e","0h8D","h"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{U!","2","%","e","0h8D","h"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{U!","2","%","e","0h8D","h"]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)