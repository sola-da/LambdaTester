





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = ["7",1.7976931348623157e+308,823,607,"Nvi"];
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 11.832298282255206; };
var argument4 = true;
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -71; };
var base_0 = ["l","N","`y","s","|{]ye","I8PC","2"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","N","`y","s","|{]ye","I8PC","2"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","N","`y","s","|{]ye","I8PC","2"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","N","`y","s","|{]ye","I8PC","2"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)