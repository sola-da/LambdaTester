





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -82; };
var argument2 = "1";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -67.38803967410323; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -87.77361634831476; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = true;
var argument8 = null;
var base_0 = [126,627,705,705,100,893,82,213,460,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,627,705,705,100,893,82,213,460,969]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,627,705,705,100,893,82,213,460,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,627,705,705,100,893,82,213,460,969]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test805.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)