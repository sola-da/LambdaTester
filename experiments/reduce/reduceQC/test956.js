





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 79; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 30; };
var argument3 = ["kfWb","{","t","t","tWM","a","u","%sL","vu,","1"];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 59.435832996840475; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 43; };
var argument6 = null;
var argument7 = [705,705];
var base_0 = [618,"Gc","6FZ","6",";",403,"s"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"Gc","6FZ","6",";",403,"s"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"Gc","6FZ","6",";",403,"s"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"Gc","6FZ","6",";",403,"s"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)