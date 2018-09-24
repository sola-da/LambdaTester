





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.21346184050156602,"â",null]; };
var argument2 = 1.7931504841606435e+308;
var argument3 = {"82":9.54191680661319e+307,"595":"{","823":5.643757891647357e+307,"s":"","1.4894335659891693e+308":5e-324,"1.0597151119087302e+308":1.1520452862680246e+308};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 59.63745885748377; };
var argument7 = r_0;
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return [0.40346117300775375,-0.3021272208942334,0,3.7551998279334216,false]; };
var base_0 = [893,893,213,157,100,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,893,213,157,100,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,893,213,157,100,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,893,213,157,100,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test442.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)