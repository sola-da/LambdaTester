





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -74; };
var argument2 = [82,595,59,893,-1,595,82];
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 89; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return ["¡",false,"c",8]; };
var argument6 = true;
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return [true,-0.7762146343063947,"0",3.371131814859921,false,false,null]; };
var base_0 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test398.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)