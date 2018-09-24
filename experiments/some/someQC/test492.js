





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Æ\u0006ðFÎ"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "^\u0019\u0012¡\b"; };
var argument3 = 969;
var argument4 = {"403":9.031306469414775e+307,"1.8658061753952827e+307":"","h":"","":618,"5.727395412153241e+307":"","6.265309145796475e+307":1.8070569095600382e+307};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -57; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "|+}\u0005Úý/\u001e\u0018s"; };
var argument7 = r_3;
var argument8 = null;
var base_0 = [49,714,655,655,705,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,714,655,655,705,49]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,714,655,655,705,49]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,714,655,655,705,49]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test492.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)