





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = "C";
var argument3 = "";
var argument4 = function() {
 callbackArguments.push(arguments) 
 return "Á`Æ:W£1c"; };
var argument5 = {"":"ZW","}>":"$","9.086082056082709e+306":9.910114618636142e+307,"1.239315699495906e+308":100};
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return "u.(¹C·¬\u0001c"; };
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument9 = r_1;
var base_0 = [82,213,627,783,705,122,893,49,460]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,213,627,783,705,122,893,49,460]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,213,627,783,705,122,893,49,460]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,213,627,783,705,122,893,49,460]
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
require("fs").writeFileSync("./experiments/find/findQC/test444.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)