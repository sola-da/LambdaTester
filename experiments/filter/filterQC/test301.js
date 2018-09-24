





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = [893,100,655,969,49,460,1.7976931348623157e+308];
var argument3 = {"213":"","607":"","":"1","1.410116313580885e+307":"I","w?":1.5071314836918567e+308,"F<":1.1783411617153941e+308};
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 24; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "Æ\u000e^\u0015C"; };
var argument6 = r_1;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = r_1;
var argument9 = true;
var base_0 = [-100,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test301.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)