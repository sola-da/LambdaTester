





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 61; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "8\""; };
var argument4 = r_1;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = {"655":"7Y","893":"?T","1.6537183171194879e+308":"","1.2117754524503785e+308":783,"z2":3.8451399511519344e+307,"":157,"-1":969,"@v$":969,"1.6106329837899857e+308":"","1.566861569485989e+307":""};
var base_0 = [595,893,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,607]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,607]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,607]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test878.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)