





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "(#ì±"; };
var argument2 = {"k?":1.6340906991040252e+308,"4.540557271434749e+307":""};
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 98.83090535614201; };
var argument5 = r_1;
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -16; };
var argument8 = r_0;
var argument9 = r_0;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return [null,null,2.0317409832251965,-5,null,false]; };
var argument11 = 0;
var base_0 = [655,122,157,126,1.7976931348623157e+308,823,82,714,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,122,157,126,1.7976931348623157e+308,823,82,714,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,122,157,126,1.7976931348623157e+308,823,82,714,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,122,157,126,1.7976931348623157e+308,823,82,714,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test761.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)