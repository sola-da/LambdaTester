





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"25":595,"":"","1.6171881377043065e+308":"","2.117036069599166e+306":403};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = {};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = function callback(){callbackArguments.push(arguments)};
var base_0 = [59,705,0,"Y18","N","}NrP"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,705,0,"Y18","N","}NrP"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,705,0,"Y18","N","}NrP"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,705,0,"Y18","N","}NrP"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceEmpty/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)