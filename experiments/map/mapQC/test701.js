





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "À]¿"; };
var argument2 = true;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 55; };
var argument4 = 823;
var argument5 = "";
var argument6 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument7 = true;
var argument8 = true;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["v","4","+",")",":i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","4","+",")",":i"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","4","+",")",":i"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","4","+",")",":i"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)