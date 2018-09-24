





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = false;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return [true,-0.15160169804758472]; };
var argument5 = false;
var argument6 = ["n`","W","t7",":","=@","Rsl"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -68.00640136643736; };
var argument8 = false;
var argument9 = false;
var argument10 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument11 = "T";
var argument12 = r_0;
var base_0 = ["&U",627,"pV5",59,1.7976931348623157e+308,242,"5<6z",242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&U",627,"pV5",59,1.7976931348623157e+308,242,"5<6z",242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&U",627,"pV5",59,1.7976931348623157e+308,242,"5<6z",242]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)