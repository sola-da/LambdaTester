





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "¥_lÏJ¶þ&º"; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0,0,-1,null]; };
var argument3 = true;
var argument4 = {"Xt":"","K":"#","c QL":">p","1.3392759337953377e+308":607};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 95.03515004800374; };
var argument7 = null;
var argument8 = [82,705,213,627,460,25,627];
var base_0 = [122,"^%",893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"^%",893]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"^%",893]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"^%",893]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test84.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)