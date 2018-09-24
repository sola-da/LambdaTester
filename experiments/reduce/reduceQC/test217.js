





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -21.05814442398861; };
var argument2 = null;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 29; };
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = true;
var argument8 = {"1.6989293400749968e+308":1.2792484848542604e+308,"2.7791631938304026e+307":8.503864816013567e+307,"5.195835282969791e+307":"11g","V":"j3","<$&":1.179567245796544e+308,"":7.957599751885657e+307};
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 95.20891766480575; };
var argument10 = [122,126];
var base_0 = ["7f",59,627,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7f",59,627,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7f",59,627,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7f",59,627,893]
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test217.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)