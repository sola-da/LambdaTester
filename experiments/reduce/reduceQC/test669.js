





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u0004¤y´0æ":[],"uIÞ":5.457204912136276}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = {};
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -31.463913239386244; };
var argument6 = {"49":"","":"f"};
var argument7 = "S";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 91.34925992058322; };
var argument9 = "";
var argument10 = null;
var base_0 = ["70",460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["70",460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test669.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)