





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 21.899454910927574; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -38; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "\b"; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = r_3;
var argument8 = [82,-100,126,627,0,25,627,213,49];
var base_0 = [607,49,460,607,59,714,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,49,460,607,59,714,126]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,49,460,607,59,714,126]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,49,460,607,59,714,126]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)