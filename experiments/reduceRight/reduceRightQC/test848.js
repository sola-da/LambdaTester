





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "ËHß®lU"; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return 43; };
var argument4 = true;
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return 66.2173377787118; };
var argument7 = {};
var argument8 = 1.280487721566666e+308;
var argument9 = function() {
 callbackArguments.push(arguments) 
 return 20.057554524204633; };
var argument10 = true;
var base_0 = [213,595,-100,25]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,595,-100,25]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,595,-100,25]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,595,-100,25]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)