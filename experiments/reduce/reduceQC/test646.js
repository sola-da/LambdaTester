





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -45; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return "\u0019]¯K4ýï~\u0017"; };
var argument3 = {"3":1.0180456478259053e+308,"122":"","O":"UZE","_":"","":"","1.6982669307746574e+308":"9","1.001705347062233e+308":"","1.6824698055111112e+308":"xU"};
var argument4 = [157,783,82,59,460,618,403];
var argument5 = function() {
 callbackArguments.push(arguments) 
 return {"\u0006yªWJ\u000bDÕ":"9","pç\t«b®U":0.4702403040381349,"2?¹im":true,"Êï|¸\u0015(ý¤":false,"¼çñ":9,"\u001f":19.667369563309062,"ÃKhï\u000b\u0002":false,"\u0010ê\u0001f\u0001¾":61.50170368965776}; };
var argument6 = ["3:i",783,"Rn<","U","e0#]FX4","5bRbr",157];
var argument7 = null;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return 53.40434827305594; };
var base_0 = ["V<","y","R"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V<","y","R"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V<","y","R"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceQC/test646.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)