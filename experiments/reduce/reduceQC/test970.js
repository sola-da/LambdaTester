





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 66.5562477852269; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = [1.7976931348623157e+308,"2N",-1,25,"h",157,126,"^"];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = r_0;
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument9 = false;
var base_0 = ["z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test970.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)