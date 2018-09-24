





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -92.9310188148981; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 50; };
var argument3 = null;
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = {">":"V","bo":"","-1":"","":7.969772263373896e+307,"1.0367667467396255e+308":"9G"};
var argument7 = "";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -42.636524149612185; };
var argument9 = r_3;
var argument10 = r_1;
var base_0 = [843,705,655,82,460]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,705,655,82,460]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,705,655,82,460]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,705,655,82,460]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test967.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)