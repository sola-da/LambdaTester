





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 47.6427632881677; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [0,false,3.7141744379972543]; };
var argument3 = r_0;
var argument4 = "H";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 98; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "Äµ\tò"; };
var base_0 = [618,969,460,157,25,242,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,969,460,157,25,242,157]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,969,460,157,25,242,157]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,969,460,157,25,242,157]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findQC/test561.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)