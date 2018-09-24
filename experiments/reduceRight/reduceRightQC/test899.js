





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -97.60450979276591; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = 157;
var argument4 = "N ";
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -25.832034152324823; };
var argument6 = true;
var argument7 = true;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -33; };
var argument9 = "";
var base_0 = [460,"nZ",213,"r",157,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"nZ",213,"r",157,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"nZ",213,"r",157,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"nZ",213,"r",157,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)