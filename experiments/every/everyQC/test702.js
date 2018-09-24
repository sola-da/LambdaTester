





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.5236739206628973,0.3927526041302869,-2.396259429500372,-2,13,null]; };
var argument2 = true;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [-0.02764287199512272,0,-1,-1]; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 73.06438721469944; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 20.21343157646376; };
var argument7 = r_1;
var argument8 = true;
var base_0 = [213,0,25,655,59,100,0,213,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,0,25,655,59,100,0,213,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,0,25,655,59,100,0,213,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,0,25,655,59,100,0,213,893]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test702.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)