





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -57; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 1; };
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 41; };
var argument5 = true;
var argument6 = 843;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument8 = "";
var argument9 = true;
var base_0 = [59,627,242,-1]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,627,242,-1]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,627,242,-1]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,627,242,-1]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test861.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)