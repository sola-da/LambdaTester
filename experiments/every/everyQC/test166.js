





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -28; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -93; };
var argument4 = true;
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 56.84033573802685; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ï8Ì_e[ú£"; };
var argument8 = r_2;
var argument9 = false;
var base_0 = ["`<5;",1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`<5;",1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`<5;",1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`<5;",1.7976931348623157e+308,823]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test166.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)