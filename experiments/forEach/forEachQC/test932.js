





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [false,"%",-0.5856031322188979,null,null,"\u0013<RK",[0,{";":0},null,-0.2603737957260286],-18.920917522300705]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 25.335551361580787; };
var argument3 = "_Y";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = false;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var base_0 = ["Qv@","w"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qv@","w"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qv@","w"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qv@","w"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test932.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)