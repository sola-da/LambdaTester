





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = {"":1.3667805440813955e+308};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -96.4590897778831; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "*\u0018¤X"; };
var argument7 = false;
var argument8 = "";
var base_0 = ["{","B",">P9","Q1","U","z","hC","U","?A"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{","B",">P9","Q1","U","z","hC","U","?A"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","B",">P9","Q1","U","z","hC","U","?A"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{","B",">P9","Q1","U","z","hC","U","?A"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test784.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)