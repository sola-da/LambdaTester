





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = 618;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = {"460":"i","714":607,"893":"","4.829664077368389e+307":460,":":"Wf","1.0083141310803632e+308":1.6640215254899868e+308,"Q":"[","":"","7.79974405171124e+307":"#","-1":"7}"};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 86; };
var argument7 = {"2.323431739539072e+307":""};
var argument8 = false;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 53; };
var base_0 = ["1x0","n","e","]yt","s-cvX6","v"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1x0","n","e","]yt","s-cvX6","v"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1x0","n","e","]yt","s-cvX6","v"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1x0","n","e","]yt","s-cvX6","v"]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyQC/test733.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)