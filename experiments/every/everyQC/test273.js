





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return ""; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 66; };
var argument4 = true;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return "³>¢§çÁ"; };
var argument9 = null;
var argument10 = "B{";
var base_0 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test273.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)