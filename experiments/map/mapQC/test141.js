





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -79; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -10; };
var argument3 = {"714":4.736863204667712e+307,"":1.4859767706467873e+308,"imjI":4.760069439522623e+307,"A":"x-","7.503415553245377e+307":"","J":""};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = r_2;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 77.07621223750922; };
var argument7 = false;
var argument8 = null;
var base_0 = [-100,705,655,5e-324,122,607,893,460,969,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,705,655,5e-324,122,607,893,460,969,618]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,705,655,5e-324,122,607,893,460,969,618]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)