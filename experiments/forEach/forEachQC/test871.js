





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 66.08981125912359; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = null;
var base_0 = ["Ys","xM",100,"`OtUD",":P","M",783,"I*",627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ys","xM",100,"`OtUD",":P","M",783,"I*",627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ys","xM",100,"`OtUD",":P","M",783,"I*",627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ys","xM",100,"`OtUD",":P","M",783,"I*",627]
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test871.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)