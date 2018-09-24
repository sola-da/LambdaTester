





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 74.80855302848965; };
var argument3 = [595,"a","NQE",714,157,242,403,"X","o"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return ["ä",[],true,false,12.863853110504593,"ÌÀ{",34,null]; };
var argument5 = true;
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -16.34959436621024; };
var argument8 = r_0;
var base_0 = ["5;G","VH",655,595,"1",242,"Z",607,"EJ"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5;G","VH",655,595,"1",242,"Z",607,"EJ"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5;G","VH",655,595,"1",242,"Z",607,"EJ"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5;G","VH",655,595,"1",242,"Z",607,"EJ"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test689.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)