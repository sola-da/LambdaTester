





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 66.65153006089746; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "z^©k"; };
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 65.3132372426565; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = {"714":"","843":"","969":"","zg":"6i!|","1.3595757737181653e+308":"3","$":"y","":122,"1.1547181404281835e+308":157};
var argument8 = true;
var base_0 = [714,607,1.7976931348623157e+308,122,655,126,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,607,1.7976931348623157e+308,122,655,126,0]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,607,1.7976931348623157e+308,122,655,126,0]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test971.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)