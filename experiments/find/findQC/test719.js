





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 60.218666172848835; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "\u001d\u0010H\u000e*A"; };
var argument3 = {"714":"(,","":"f"};
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "E\u0011»"; };
var argument6 = false;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = null;
var base_0 = ["V","uA","O!,L"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","uA","O!,L"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","uA","O!,L"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","uA","O!,L"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test719.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)