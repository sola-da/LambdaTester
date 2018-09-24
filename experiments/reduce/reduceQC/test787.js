





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 48; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "x"; };
var argument3 = null;
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -98; };
var argument6 = [242,82,100,-100,618];
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [607,655,82,-1,242,618,-1,607,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,82,-1,242,618,-1,607,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,82,-1,242,618,-1,607,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,82,-1,242,618,-1,607,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test787.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)