





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [0.46285566236590747,true,null,3,-10.967500195267267,-8.89473820671971,-21.16128692149517,null]; };
var argument2 = 1.196709288428046e+308;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return -77; };
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return "sØ\tQ"; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return {"²+:":0.01716283180854572,"\u0004­®":true,"b¹4":true,"ùÔÊ¶ê":15.730676962651778,"Qâ³Äd\u0005p+\t":-28,"¬¤":false,"ÿÂò":true,"Ï^":"\u0000°ðCHW"}; };
var argument7 = r_0;
var argument8 = {};
var base_0 = [823]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)