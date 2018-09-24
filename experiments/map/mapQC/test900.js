





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.7017002603636509,null,null,true]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument3 = "[E";
var argument4 = true;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 47.18082915897375; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 29.166858045790068; };
var argument8 = true;
var base_0 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?+","HCI",655,0,"H%h","Y",-100,"^"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)