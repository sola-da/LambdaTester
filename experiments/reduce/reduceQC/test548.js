





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -77; };
var argument2 = ["2d","g"];
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [false]; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 2; };
var argument6 = r_1;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -11; };
var argument9 = true;
var argument10 = 969;
var base_0 = [126,618,460,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,618,460,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test548.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)