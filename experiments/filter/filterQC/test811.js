





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"6I":-0.36832022572585976,"{-nt£¥t$5":0,"c`\u001c]fú":true,"|#¾I½âd":-5.345795015568914,"wöµ":true,"! Îf":22,"1\u000f\u000bF":"<éÌS"}; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -31.4404748550589; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = true;
var base_0 = [157,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterQC/test811.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)