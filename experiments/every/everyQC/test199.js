





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 97; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -83; };
var argument4 = null;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"\u0016ÆIÁ\"³!¨Y\u0016":false,"\u0015Æ_":false}; };
var argument7 = r_0;
var base_0 = ["k","D*","#{",403,893,"=",893,242,"e"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","D*","#{",403,893,"=",893,242,"e"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","D*","#{",403,893,"=",893,242,"e"]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","D*","#{",403,893,"=",893,242,"e"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test199.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)