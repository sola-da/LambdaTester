





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = "";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -79; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument5 = null;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -77; };
var argument8 = "";
var argument9 = r_2;
var base_0 = [25,618,25,213,126,25,893,49,157,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,618,25,213,126,25,893,49,157,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,618,25,213,126,25,893,49,157,59]
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
require("fs").writeFileSync("./experiments/map/mapQC/test737.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)