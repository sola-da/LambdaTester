





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -57.543101032356134; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -86; };
var argument5 = r_2;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = {"0":"","25":82,"100":213,"893":"C","SQ$":9.400345732954384e+307,"":"","^":"P","3.2588997921135914e+306":"F2nCX>6",":U?":"9m2HR"};
var argument9 = r_0;
var base_0 = [783,5e-324,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,5e-324,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,5e-324,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,5e-324,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test856.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)