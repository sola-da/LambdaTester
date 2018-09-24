





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -6.720800783748837; };
var argument2 = 1.1747112955101904e+308;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -71.24088287917732; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 38; };
var argument6 = 2.7002232564488657e+307;
var argument7 = r_0;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 27; };
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test140.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)