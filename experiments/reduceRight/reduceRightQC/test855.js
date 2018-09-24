





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 26.577173305261326; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return [null,null,1.0433734334202214,true,null,null,-24.119323635177825,null]; };
var argument3 = [655,460,595,893,5e-324,-100,705];
var argument4 = {"213":9.113152136225385e+307,"242":"I","3.6692741948682133e+307":0,"":1.6522995472911487e+308,"{s":"1","1.1038139326235288e+306":1.7056826494661902e+308};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return -64.10661660318257; };
var argument6 = true;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -2.3063863701215714; };
var argument8 = r_2;
var base_0 = [705,627,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,627,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)