





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -8; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -69.56143906901757; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = null;
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 86.3613262085003; };
var argument9 = 5.051933784423802e+307;
var argument10 = true;
var base_0 = ["U",893,"#","d9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U",893,"#","d9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U",893,"#","d9"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U",893,"#","d9"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test896.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)