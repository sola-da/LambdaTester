





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 86.85370155536332; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 83; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [true,-0.8931229876050353,-3.7659164485198797,true,null,false,null]; };
var argument4 = 1.7537724956041389e+308;
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = r_0;
var base_0 = [-100,100,157,783,627,969,714,59,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,100,157,783,627,969,714,59,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,100,157,783,627,969,714,59,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,100,157,783,627,969,714,59,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)