





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -49.54972723063919; };
var argument2 = ["Z","]u]un#v","`&","aa","QZps","kW%","(3","]T2Qz"];
var argument3 = [49,893,100,49];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 62; };
var argument5 = [-100,126];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -71; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0.7699589690967015]; };
var base_0 = [595,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)