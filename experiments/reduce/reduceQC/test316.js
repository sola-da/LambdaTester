





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [true,0,2,"^â¾",true,-10.974202971968106,-8,24]; };
var argument6 = [1.7976931348623157e+308,126];
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 90; };
var argument9 = null;
var base_0 = [")[",-1,823,"=6<>",403,"k"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")[",-1,823,"=6<>",403,"k"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")[",-1,823,"=6<>",403,"k"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)