





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -57.02161567024968; };
var argument2 = r_0;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [0,null,null,true,-5.508775333940978,false,12.118775617298422,-43.908239830926334]; };
var argument5 = "E=";
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "äù\u0014ìu"; };
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return -56.20029140894762; };
var argument10 = 213;
var argument11 = 1.0356979002097948e+308;
var base_0 = [705,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapQC/test429.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)