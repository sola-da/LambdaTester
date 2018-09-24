





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 0; };
var argument2 = {":[":969,"9.908289520587372e+307":5e-324,"":1.329788913474809e+308,"Y$RjO;":82,"1e":1.0400658109989964e+308,"7.646082706400073e+307":783,"dWe":1.3959017042697757e+308,"4.9768397522802e+307":-1};
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = 3.009898029835465e+307;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [-0.38154496539523364,true,-3]; };
var argument8 = null;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "^WÂø2"; };
var base_0 = [59,100,-1,213,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,100,-1,213,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,100,-1,213,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)