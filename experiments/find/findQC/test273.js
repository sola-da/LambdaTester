





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"Ud\u0018\\":0}; };
var argument2 = r_0;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument4 = true;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -67.62987083214153; };
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 61.78139303104384; };
var argument9 = null;
var argument10 = "B{";
var base_0 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","9","(vG","B","{I","GTD","jc","7"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findQC/test273.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)