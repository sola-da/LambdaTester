





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -57.142818413037276; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -91; };
var argument3 = null;
var argument4 = "";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = ["y1",607,-100,893,"I",242,"2aB",893];
var argument7 = "X";
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -92; };
var argument9 = true;
var base_0 = ["5",")","u",")","x","JnBlw"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5",")","u",")","x","JnBlw"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5",")","u",")","x","JnBlw"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5",")","u",")","x","JnBlw"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findQC/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)