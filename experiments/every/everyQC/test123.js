





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 43.34345572150615; };
var argument2 = "4y";
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = false;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return []; };
var argument10 = false;
var argument11 = r_3;
var base_0 = [714,460,403,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,460,403,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,460,403,893]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,460,403,893]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyQC/test123.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)