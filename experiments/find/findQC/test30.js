





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 4.811331178396694; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = {"705":"H","U0":":","2.37326480564517e+307":"3u29","1.623311210516183e+308":403,"":""};
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = 242;
var argument9 = null;
var base_0 = ["(","b","&k","8Vm","o","AzO","h"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","b","&k","8Vm","o","AzO","h"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","b","&k","8Vm","o","AzO","h"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","b","&k","8Vm","o","AzO","h"]
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
require("fs").writeFileSync("./experiments/find/findQC/test30.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)