





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -47.465265811563405; };
var argument2 = [-100,714,893,59,157];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 12.44139194673437; };
var argument4 = r_1;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -0.12294029571853216; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -78.88554828829638; };
var argument7 = r_3;
var base_0 = [25,714,969,655,82,157,618,49,607,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,714,969,655,82,157,618,49,607,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,714,969,655,82,157,618,49,607,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,714,969,655,82,157,618,49,607,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)