





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Ñú"; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 91; };
var argument4 = r_0;
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 3; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.9971662411375142,2.295498314214119,-3]; };
var base_0 = [627,1.7976931348623157e+308,893,460,157,627,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,893,460,157,627,655]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,893,460,157,627,655]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)