





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 38.10332123790157; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -82.28192024752963; };
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [false,-0.5503538107480435,1.2781012068668245,true,false,true,18.905688416696325,-47.04953388839358]; };
var argument4 = null;
var argument5 = [607,969,242,5e-324,"?N,",59,"1","dd4"];
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -49.68580370772071; };
var argument7 = false;
var base_0 = [618,100,126,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,100,126,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,100,126,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test723.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)