





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [[],null,false,-2,null,null,"âØ)~Ã",-9]; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -94.6299937450878; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [783,823,82,823,618,49,126,1.7976931348623157e+308,-1,714]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,823,82,823,618,49,126,1.7976931348623157e+308,-1,714]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,823,82,823,618,49,126,1.7976931348623157e+308,-1,714]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,823,82,823,618,49,126,1.7976931348623157e+308,-1,714]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someQC/test358.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)