





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -15.355041165257365; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [0.21390949210526577,null,true,-3,null,true,null,false]; };
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "jGC\u0012"; };
var argument6 = false;
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -88; };
var argument9 = 59;
var argument10 = r_1;
var base_0 = [783,25,627,783,100,122,-100,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,25,627,783,100,122,-100,783]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapQC/test302.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)