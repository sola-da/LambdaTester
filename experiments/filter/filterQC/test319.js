





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return ["Ô",false,3.467521719421243,false,false]; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 3; };
var argument4 = r_0;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 0.6257173858197351; };
var argument6 = [49,157,783,213,714,82];
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [0,0.5093832538008816,{"Ã\u0011":0,"Ô":0},5]; };
var base_0 = [213,783,595,25,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,595,25,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,595,25,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test319.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)