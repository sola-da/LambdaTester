





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = 1.7752071243417184e+308;
var argument7 = r_1;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var argument9 = {"cL":"8","5e-324":"","1.183917040223195e+308":1.0368627823429423e+308,"*":"","1.415648066986162e+308":"d","1.2632424724371093e+306":""};
var base_0 = [783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test751.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)