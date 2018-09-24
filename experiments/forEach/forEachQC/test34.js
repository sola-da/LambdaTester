





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -90.11333747669379; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = 1.7081781889731498e+308;
var argument5 = 122;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = r_2;
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 57; };
var argument10 = r_1;
var base_0 = [823,607,969,783,"G;","sSR",1.7976931348623157e+308,"#dR70","!O",",;"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,607,969,783,"G;","sSR",1.7976931348623157e+308,"#dR70","!O",",;"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,607,969,783,"G;","sSR",1.7976931348623157e+308,"#dR70","!O",",;"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,607,969,783,"G;","sSR",1.7976931348623157e+308,"#dR70","!O",",;"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test34.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)