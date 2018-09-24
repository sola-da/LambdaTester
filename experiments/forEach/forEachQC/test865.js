





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u001e\u001eSIÂ":0}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "\u0016³"; };
var argument3 = true;
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -71.67731948513985; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = [595,460,969,627,59,893,705,126,607];
var base_0 = [655,893,714,893,403,618,607,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,893,714,893,403,618,607,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,893,714,893,403,618,607,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,893,714,893,403,618,607,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)