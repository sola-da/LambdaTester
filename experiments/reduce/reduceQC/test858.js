





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -67; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = null;
var argument5 = 627;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 43; };
var argument7 = {"TG":"","":242,"!T7":"="};
var argument8 = r_1;
var base_0 = [893,823,-100,618,823,705,1.7976931348623157e+308,403,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,823,-100,618,823,705,1.7976931348623157e+308,403,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,823,-100,618,823,705,1.7976931348623157e+308,403,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,823,-100,618,823,705,1.7976931348623157e+308,403,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test858.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)