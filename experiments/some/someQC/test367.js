





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 85.91872573866706; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -44; };
var argument3 = false;
var argument4 = 1.7976931348623157e+308;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = r_2;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 64; };
var argument9 = [-100,607,460];
var argument10 = false;
var base_0 = ["iK","qt"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["iK","qt"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["iK","qt"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["iK","qt"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someQC/test367.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)