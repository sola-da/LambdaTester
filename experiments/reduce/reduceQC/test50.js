





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -11; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 48.07239653835653; };
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -74; };
var argument8 = null;
var argument9 = 82;
var base_0 = [1.7976931348623157e+308,618,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,618,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,618,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,618,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test50.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)