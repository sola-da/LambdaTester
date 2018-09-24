





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "5Jp"; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [0,[],-0.885824783822323,null,-1,8,null]; };
var argument4 = false;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 28.878418234032075; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = false;
var argument9 = r_1;
var base_0 = [607,893,893,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893,893,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893,893,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test196.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)