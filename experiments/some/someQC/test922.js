





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"O":false,"û":{"¬":-0.9154425086965274},"(¨":-2,"f¶":-14.151339775844505,"«":-24,"+":-9,"è®\u0011":-0.06656984541269595}; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = false;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 42.914514619504615; };
var argument7 = {"627":""};
var base_0 = ["gdO","5","e"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["gdO","5","e"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["gdO","5","e"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["gdO","5","e"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someQC/test922.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)