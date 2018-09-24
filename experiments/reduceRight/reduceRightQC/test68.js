





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 51.8383732075896; };
var argument2 = {"":"","-100":1.1850178008699003e+307,"d":"%","1.1304926207906006e+308":8.985532686684564e+307};
var argument3 = function() {
 callbackArguments.push(arguments) 
 return "³Ô"; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -12.155896075371974; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument6 = true;
var argument7 = null;
var base_0 = [213,595,460,25,49,969,823,157,82]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,595,460,25,49,969,823,157,82]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,595,460,25,49,969,823,157,82]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,595,460,25,49,969,823,157,82]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test68.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)