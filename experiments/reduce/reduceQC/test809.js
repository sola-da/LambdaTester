





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -72.56950412742948; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = "";
var argument6 = [100,-1];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var base_0 = [655,1.7976931348623157e+308,100,82,823,893,893,969,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,1.7976931348623157e+308,100,82,823,893,893,969,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,1.7976931348623157e+308,100,82,823,893,893,969,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,1.7976931348623157e+308,100,82,823,893,893,969,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test809.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)