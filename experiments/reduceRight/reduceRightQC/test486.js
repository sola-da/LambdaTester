





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,null,0,true,"",[false,0],null]; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -5; };
var argument3 = "";
var argument4 = false;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "\u0010ÇÄE¦:C¬O"; };
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 22.39177146970004; };
var argument8 = null;
var base_0 = [607,714,59,627,655,627,893,969,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,714,59,627,655,627,893,969,100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test486.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)