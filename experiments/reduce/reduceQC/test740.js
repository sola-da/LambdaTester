





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 98; };
var argument2 = {"49":"","157":705,"C8lz;b":"x","1.3741690125091997e+308":"","":"9i,G`xV","o":"Iq$E","`":"R"};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 63; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [157,59,893,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,59,893,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,59,893,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,59,893,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test740.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)