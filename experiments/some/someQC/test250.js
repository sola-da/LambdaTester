





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return {"sû0Kp\u0006":true,")Ýr5R":0,"ÿ×£Þ§¼­":-3.5205103523347256,"Jë)ý":false,"?>kC\n¨v°\u000b":"\u0004","g\u0003´ßÂÈ\u0015ý":false,"\f §o":false}; };
var argument2 = ";$N";
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return 98; };
var argument5 = {"":4.925950673864633e+307};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)