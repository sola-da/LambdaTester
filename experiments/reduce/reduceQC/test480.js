





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = {"213":"","9.655439531837537e+307":"","1.4558911257947117e+308":1.4400994143766396e+308,"C2":627,"":1.4451062225792429e+308,",":"^VrZ"};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -32.198798293614736; };
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = {"1.7733320229902411e+308":8.470017191379436e+307,"Kv":"bjn","1.0414621755576014e+308":8.405250956246933e+307,"[t":"K'"};
var argument9 = ["{",969,"a",655,"Vma",5e-324,"[v",-1,627];
var base_0 = [627,893,1.7976931348623157e+308,705,655,403,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,893,1.7976931348623157e+308,705,655,403,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,893,1.7976931348623157e+308,705,655,403,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,893,1.7976931348623157e+308,705,655,403,655]
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)