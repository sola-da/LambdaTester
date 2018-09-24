





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -10; };
var argument2 = 4.1561218518143915e+307;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -77; };
var argument4 = null;
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 8; };
var argument7 = true;
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 58; };
var argument10 = true;
var base_0 = ["Th",893,"3"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Th",893,"3"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Th",893,"3"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Th",893,"3"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test260.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)