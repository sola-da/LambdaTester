





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -62.92327675518597; };
var argument2 = true;
var argument3 = 823;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -11.162098364308438; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -6; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "ØÔº´"; };
var argument8 = "t_kfAX";
var base_0 = [893,627,893,82,618,403,1.7976931348623157e+308,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,627,893,82,618,403,1.7976931348623157e+308,783]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,627,893,82,618,403,1.7976931348623157e+308,783]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,627,893,82,618,403,1.7976931348623157e+308,783]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)