





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 42; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -95; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 81.56091910624836; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 98.28310764819625; };
var argument8 = true;
var argument9 = null;
var base_0 = [714,"n","w",714,714,823,-100,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"n","w",714,714,823,-100,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"n","w",714,714,823,-100,705]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test880.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)