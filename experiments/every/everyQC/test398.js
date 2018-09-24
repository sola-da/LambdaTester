





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -7; };
var argument2 = [82,595,59,893,-1,595,82];
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [true,0,1,null,10,-18.172413804311947]; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 73.3814798578805; };
var argument6 = true;
var argument7 = r_2;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 45.96865246390705; };
var base_0 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,823,157,714,460,5e-324,0,126,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyQC/test398.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)