





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = {"0":595,"59":8.532219297782195e+307,"122":3.083910988293413e+306,"969":"sG","[Z`:":1.2279798669754719e+308};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = r_0;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument9 = [1.7976931348623157e+308,25,126,82,5e-324,126,122];
var base_0 = [1.7976931348623157e+308,1.7976931348623157e+308,126,618,627,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,1.7976931348623157e+308,126,618,627,595]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,1.7976931348623157e+308,126,618,627,595]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,1.7976931348623157e+308,126,618,627,595]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test287.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)