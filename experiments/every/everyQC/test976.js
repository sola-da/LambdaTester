





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "\u000f9\u0019a\t"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -20.383870948970028; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -41.4803272153927; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [null,0.4671197809189087,[],true,-2.604756886090467]; };
var argument6 = r_3;
var base_0 = ["S)"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S)"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S)"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S)"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyQC/test976.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)