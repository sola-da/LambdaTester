





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [0,[],true]; };
var argument5 = r_2;
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = [714,607,49,1.7976931348623157e+308,1.7976931348623157e+308,157,0,59,213,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,607,49,1.7976931348623157e+308,1.7976931348623157e+308,157,0,59,213,607]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,607,49,1.7976931348623157e+308,1.7976931348623157e+308,157,0,59,213,607]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,607,49,1.7976931348623157e+308,1.7976931348623157e+308,157,0,59,213,607]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findQC/test668.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)