





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -27.710672628441422; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = false;
var argument4 = [126,705,122,49,0,5e-324];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "\u0001ÖÃÂ"; };
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 85; };
var argument8 = [627,893];
var argument9 = r_3;
var base_0 = [1.7976931348623157e+308,49,893,714,627,705,618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,49,893,714,627,705,618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,49,893,714,627,705,618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,49,893,714,627,705,618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test48.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)