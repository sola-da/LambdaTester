





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "Ê"; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [null,null,null,null,4.654654847073026,null,-27.41878777881306]; };
var argument6 = 4.669355617603357e+307;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var base_0 = ["#",25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#",25]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#",25]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#",25]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test893.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)