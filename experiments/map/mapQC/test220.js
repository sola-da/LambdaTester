





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "AAµÍ4\fò"; };
var argument2 = true;
var argument3 = "T";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -35; };
var argument5 = true;
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return ["î",0.26463182331164137,null,-4.049587498450237,null,false,false,-40]; };
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument10 = null;
var base_0 = ["I",460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I",460]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I",460]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test220.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)