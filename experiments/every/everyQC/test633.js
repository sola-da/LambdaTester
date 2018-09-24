





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument2 = null;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return {"\u0004¾Ãü®":"ë","`{":true,"ó»\\ë":2,"ä®å\u0002\u001b4\u0010Q\bÂ":true,"á{_ò\u0004ù":"\u0017ûêm2>","\u0007Ù#nV\u000b":false,"8\u0017Ú>{óÊß":true}; };
var argument4 = {"1$":6.209875132005905e+307,"3.883690897742399e+306":1.6213149743565212e+308,"f-d":"","":969,"9.007564522368696e+307":157,"1.4019418848198667e+308":893,"6.442801038313787e+307":1.7172931184452631e+308};
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 31.976619218095802; };
var argument6 = r_0;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return -91.93038208812965; };
var base_0 = ["q",-1,"n","Z",122,">X=`","Y"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q",-1,"n","Z",122,">X=`","Y"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q",-1,"n","Z",122,">X=`","Y"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q",-1,"n","Z",122,">X=`","Y"]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyQC/test633.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)