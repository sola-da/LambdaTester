





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"è¦óo\u0000<\u000b¸A":false}; };
var argument2 = "^;*";
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_0;
var argument6 = "";
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 66; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [627,0,714,705,627,213,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,0,714,705,627,213,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,0,714,705,627,213,705]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,0,714,705,627,213,705]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)