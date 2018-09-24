





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -52.50268116594818; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -20.524963125946517; };
var argument5 = 783;
var argument6 = 7.848226062977162e+307;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -84; };
var argument8 = r_0;
var argument9 = r_2;
var base_0 = [126,1.7976931348623157e+308,607,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,607,607]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,1.7976931348623157e+308,607,607]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,607,607]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someQC/test23.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)