





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0]; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -70.95882340732254; };
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 54.60313384794389; };
var argument7 = 126;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [460,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test464.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)