





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument3 = "[E";
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -8.23620367087794; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 13.64191346827084; };
var argument8 = true;
var base_0 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
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
require("fs").writeFileSync("./experiments/find/findQC/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)