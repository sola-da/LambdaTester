





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 79.01642744070352; };
var argument2 = "";
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -32; };
var argument4 = null;
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "r\ts(ük"; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -32.768790581665975; };
var argument9 = null;
var argument10 = r_2;
var base_0 = [59,213,403,843,-100,157,607,618,618,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,213,403,843,-100,157,607,618,618,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,213,403,843,-100,157,607,618,618,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,213,403,843,-100,157,607,618,618,5e-324]
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test32.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)