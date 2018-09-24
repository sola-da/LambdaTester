





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "\tí\u000f¤tYÕä"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 12; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -85.33905389781057; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [true,true,null,null,"?",-7.629399887517597,{"Þm.©C":0.41215460930887193,"® Ò\u0007Z":""}]; };
var argument7 = r_3;
var argument8 = [82,-100,126,627,0,25,627,213,49];
var base_0 = [607,49,460,607,59,714,126]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,49,460,607,59,714,126]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,49,460,607,59,714,126]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)