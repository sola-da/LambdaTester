





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,0,-0.24062142106127826,"T",2.733129347255364,-12,18.411265019147592,false]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = null;
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [0]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = ["5"];
var base_0 = ["Eg","Z","?p",",6","7","8"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Eg","Z","?p",",6","7","8"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Eg","Z","?p",",6","7","8"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Eg","Z","?p",",6","7","8"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test810.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)