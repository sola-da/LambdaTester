





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u000eéÂ\n®v1":0,"ô":0}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [true,null,0,8,null,"ÛÔ8","¸",null]; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 4; };
var argument5 = true;
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -20.21308778886839; };
var argument8 = [823,"m%9",25,"Nw6Y"];
var argument9 = null;
var base_0 = ["3 u","qM",157,403,82]
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
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3 u","qM",157,403,82]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapQC/test550.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)