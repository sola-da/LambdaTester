





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 4; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = null;
var argument4 = ["ia","wT(","#`f","P","G","+h","uv,"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 23; };
var argument6 = {"0":1.1250277249309234e+308,"":""};
var argument7 = "";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument9 = ["a"];
var argument10 = 1.5815511727001172e+308;
var base_0 = ["!","}","Dp","+","V]E","E","k"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","}","Dp","+","V]E","E","k"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","}","Dp","+","V]E","E","k"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","}","Dp","+","V]E","E","k"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test143.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)