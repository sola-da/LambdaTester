





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [null,0.5068562979540652,1.8853346115442466,-5,true,null,[0.7644275845198709,null,null,null]]; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = null;
var argument5 = 82;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return [0,null]; };
var base_0 = [0,1.7976931348623157e+308,126,403,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,1.7976931348623157e+308,126,403,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,1.7976931348623157e+308,126,403,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,1.7976931348623157e+308,126,403,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test314.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)