





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 12.806511289025346; };
var argument2 = 893;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = null;
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [null,true,-3.504678573170053,"=","n\u001d\"q"]; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "Rw\u0013E"; };
var argument8 = [-100,242,1.7976931348623157e+308,-100,783,122,49,705,705,460];
var base_0 = [627,126,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,126,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,126,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,126,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)