





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"\u001f¬ê®¡":0,"\u0006D»,'":0.5132598012140281,"¸ÈS5hº\u0012":6.472886967659105,"\u001f":-3.2236963029118755,">":[-0.983165592782052,0.12949850750314806],"LÕª0c":-25}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return -31.123503716783585; };
var argument3 = false;
var argument4 = {"4.3016022729243e+307":"ypP","9.86517183011537e+307":"","":""};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = [-100,59,100,823,122,607,607];
var base_0 = ["dt",157,"U","Ne","%"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dt",157,"U","Ne","%"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dt",157,"U","Ne","%"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)