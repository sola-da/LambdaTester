





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -93.19231968373917; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 33; };
var argument4 = 460;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -79.22137039190582; };
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -96; };
var argument8 = {"655":"Qc|^m{Kl","705":82,"w":714};
var base_0 = [403,403,242,823,893,122,843,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,403,242,823,893,122,843,893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,403,242,823,893,122,843,893]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test346.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)