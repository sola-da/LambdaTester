





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -2.82770054645185; };
var argument2 = false;
var argument3 = false;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return -78.16040053103299; };
var argument5 = true;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = function() {
 callbackArguments.push(arguments) 
 return {"^":true,"\u0010.ùØ6ÄÎ":0.06342425810456431,"Zì":[],"ñf«\u0016p\\":0,"2\u000fgÑ\u0007":-24}; };
var argument8 = {"":1.2714209598097229e+308,"6.132654860904094e+307":"","1.724556268402602e+308":4.112080789503721e+307,"V":1.5701157743527745e+308,"1.0195899508019878e+308":"m","k":9.805633733244038e+307};
var base_0 = [403,100,82,823,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,100,82,823,823]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,100,82,823,823]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,100,82,823,823]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test905.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)