





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = false;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 99; };
var argument4 = {"823":1.3250229781739033e+308,"2.3116846365031627e+307":"8"};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return [0,-0.6467679965709938,0,false,-1]; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = [5e-324,"6>","F",783,82,595,-1,"=","5am",655]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"6>","F",783,82,595,-1,"=","5am",655]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,"6>","F",783,82,595,-1,"=","5am",655]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"6>","F",783,82,595,-1,"=","5am",655]
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
require("fs").writeFileSync("./experiments/find/findQC/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)