





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 97.75188156300794; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 4; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -78.67956401627261; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -80; };
var base_0 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C","1q^","@SGWZ",")","GE5M-!455",893,"PI"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test80.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)