





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = 7.75082242602848e+307;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 39; };
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 1; };
var argument8 = [893,705,969,"C",157];
var base_0 = ["3C","X","N","p%",25,"t[","("]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3C","X","N","p%",25,"t[","("]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3C","X","N","p%",25,"t[","("]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3C","X","N","p%",25,"t[","("]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test186.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)