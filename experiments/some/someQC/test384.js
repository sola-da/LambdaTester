





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 29.677731608456305; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 13; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -38.812874176438925; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = {"":"","1.0692999465154441e+308":403};
var argument7 = r_1;
var base_0 = ["h",618,"^C$Z",">b`",618,"$",823,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h",618,"^C$Z",">b`",618,"$",823,126]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h",618,"^C$Z",">b`",618,"$",823,126]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h",618,"^C$Z",">b`",618,"$",823,126]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test384.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)