





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 33; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -99; };
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 51.75903723676938; };
var argument5 = ["6a","+j{ZU+hbjY"];
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -26; };
var argument8 = "Kv";
var base_0 = [100,-1,49,25,-1,49,0,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-1,49,25,-1,49,0,213]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-1,49,25,-1,49,0,213]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-1,49,25,-1,49,0,213]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)