





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = ["Z","]u]un#v","`&","aa","QZps","kW%","(3","]T2Qz"];
var argument3 = [49,893,100,49];
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = [-100,126];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return ",ë\u0011Ý$Û#¸"; };
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return {"më4":0,"åGÎ÷ç¤í9":false,"L}\\":-5,"À³>úy§R":"","Ò":8,"\u0018o\u0003\u0014Î":-20.429517083359897}; };
var base_0 = [595,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,-1]
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
require("fs").writeFileSync("./experiments/find/findQC/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)