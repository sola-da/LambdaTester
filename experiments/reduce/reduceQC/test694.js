





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = r_0;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 93.2383569567919; };
var argument5 = {"714":"d","5.980598391470642e+307":9.916536857973308e+307,"1.3926169122152775e+308":1.3330608596588464e+308,"a9a":627,"":"q"};
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var argument9 = null;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return -11; };
var argument11 = r_0;
var base_0 = [618,893,"qJ"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,"qJ"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,"qJ"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,"qJ"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)