





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "q¬\u000b"; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [null,0.5656516204131303,-2,false,false,"\u0011"]; };
var base_0 = [">6",157,"$GcR","W@",714,823,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">6",157,"$GcR","W@",714,823,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">6",157,"$GcR","W@",714,823,82]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">6",157,"$GcR","W@",714,823,82]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test57.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)