





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -28.418979559420208; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = true;
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [[],-0.9918751463441973]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = ["bJ","e","]lsgG","O","U4","<oMkafkn","&"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bJ","e","]lsgG","O","U4","<oMkafkn","&"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bJ","e","]lsgG","O","U4","<oMkafkn","&"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bJ","e","]lsgG","O","U4","<oMkafkn","&"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someQC/test116.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)