





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "¬\u001b"; };
var argument3 = null;
var argument4 = {"":"V%r","5.320894320500706e+307":100};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = r_2;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 85; };
var argument8 = 157;
var base_0 = ["KOJf","Bxx","N","7",">","E","9","%cT"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["KOJf","Bxx","N","7",">","E","9","%cT"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["KOJf","Bxx","N","7",">","E","9","%cT"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["KOJf","Bxx","N","7",">","E","9","%cT"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test717.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)