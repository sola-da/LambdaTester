





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument2 = [823,705,714,893,607,1.7976931348623157e+308];
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = {"25":7.744506219211842e+307,"969":"1","7.92871485781261e+307":"d","":"","HE":""};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return "Û"; };
var argument7 = true;
var argument8 = "Yi";
var argument9 = function() {
 callbackArguments.push(arguments) 
 return {"ÉëS¢C9ÀµÕ":true,"V^ÖKu56tC":-0.18819036414406698,"ÔÀý":3.106247845906143,"¨ñ\u00009":true,"\u000e'Õ­/\u001d":"²ËR","È«\u0006¬jM²H>":true}; };
var argument10 = "sd";
var base_0 = ["B",460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B",460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B",460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B",460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test780.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)