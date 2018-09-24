





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 28; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -40; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = {};
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -2; };
var argument9 = {"460":1.6835866702188528e+308,"":"","1.3548608996134217e+308":"i","Y[":"","k":595,"g7":59,"u3`":",`","5.729874349087147e+307":1.6146985707938535e+308,"1.493682339013866e+308":1.1181229298228666e+308,"1.7643303536089484e+308":""};
var argument10 = null;
var base_0 = [1.7976931348623157e+308,403,-100,100,618,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,403,-100,100,618,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,403,-100,100,618,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,403,-100,100,618,969]
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test465.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)