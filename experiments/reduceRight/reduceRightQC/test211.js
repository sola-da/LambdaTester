





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = null;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"?HßåIï":0,"A+Þç8e\u0011Y":"c"}; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"ÓÍ":0.6256958100135472,"lÉ\r7aævMÎ":false,"8\u0019":true,"án!":0.5364799978526911,"¸A?ïFN0ÿ":false,"ÙE":true,"e¬ò¼":-76.60867955784134}; };
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument8 = false;
var base_0 = [1.7976931348623157e+308,627,1.7976931348623157e+308,627,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,627,1.7976931348623157e+308,627,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,627,1.7976931348623157e+308,627,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightQC/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)