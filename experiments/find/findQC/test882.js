





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "þ%×2áëz\f"; };
var argument2 = false;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [0,false,true,{"m0":false},7.1964541431225015]; };
var argument5 = true;
var argument6 = 1.1287918654265425e+308;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [{"\u0018":true},-0.5777179877717207,-2.7832328120287064,true,6,-21,[0],"¸ìøÊ"]; };
var base_0 = [25,627,595,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,627,595,0]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,627,595,0]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,627,595,0]
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
require("fs").writeFileSync("./experiments/find/findQC/test882.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)