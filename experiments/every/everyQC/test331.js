





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 82.82559979459248; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = "_O";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [-0.4214379735396341,true,-1,-0.7397539714818755,-4,false,null,null]; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "?l:·s"; };
var argument6 = 242;
var base_0 = ["dbn","=","s","+","i","F"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dbn","=","s","+","i","F"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dbn","=","s","+","i","F"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dbn","=","s","+","i","F"]
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
require("fs").writeFileSync("./experiments/every/everyQC/test331.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)