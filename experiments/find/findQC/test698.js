





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "ÊÞ"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "Áý\u0002aù\u000bz"; };
var argument3 = null;
var argument4 = "k";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 40.51879798953877; };
var argument6 = [25,100,100,403,705,126,969,157,823];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -82.97369731470702; };
var argument8 = false;
var argument9 = "lN";
var base_0 = [823,607,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,607,893]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,607,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,607,893]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)