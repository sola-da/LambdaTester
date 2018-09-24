





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {" ¥\u000b":false,"\u0004Å·)\tßiw":"p","\n?ø»":[],"¹hUC¾":1.9620500075605063,"\u0019í":true,"÷\u000fÍßÀ1":15,"eÁü¸\u0010":false,"=t*K":20.531222986133685}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = "f";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 70.34936954436613; };
var argument6 = null;
var base_0 = [100,403,607,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,403,607,595]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapQC/test869.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)