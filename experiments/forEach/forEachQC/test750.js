





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0.4560798842631939,{"\u0003":-0.5726105495481346},{"Ï":true},-7,0]; };
var argument3 = false;
var argument4 = {"4.3016022729243e+307":"ypP","9.86517183011537e+307":"","":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 83.35460172213934; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = [-100,59,100,823,122,607,607];
var base_0 = ["dt",157,"U","Ne","%"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dt",157,"U","Ne","%"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dt",157,"U","Ne","%"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dt",157,"U","Ne","%"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)