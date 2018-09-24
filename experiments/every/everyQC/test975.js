





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "<"; };
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "\u000eÖ\fE3â"; };
var argument6 = [460,25,126,49];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 12.227421857435106; };
var argument8 = null;
var argument9 = false;
var base_0 = [627,843,82,823,705,0,213,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,843,82,823,705,0,213,460]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,843,82,823,705,0,213,460]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,843,82,823,705,0,213,460]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test975.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)