





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "\u0005í\u001c-µÍ\r2"; };
var argument2 = 8.36922255956091e+307;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -25; };
var argument7 = null;
var argument8 = r_0;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return "ÐG¤1ÚÖ©"; };
var argument10 = {"157":"","403":"lz","":49};
var argument11 = r_0;
var base_0 = ["HhC:]M",607,655,"x","?"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["HhC:]M",607,655,"x","?"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["HhC:]M",607,655,"x","?"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["HhC:]M",607,655,"x","?"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test915.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)