





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -38; };
var argument2 = {"1.5171480389601577e+308":627,"J":157};
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 90; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 96; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "Z½r¬;É"; };
var argument8 = {"126":"e","2.1445415787700388e+307":"","":"","x&O@":"","yrr":""};
var argument9 = 705;
var base_0 = [82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test396.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)