





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "H§ßáJ\u0005Zsu"; };
var argument2 = null;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -69.1135636881731; };
var argument5 = r_1;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -16; };
var argument7 = {"122":1.4221894611786458e+308,"":"n","1.7976931348623157e+308":"9B"};
var argument8 = r_1;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = ["x","EO","w"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x","EO","w"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test962.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)