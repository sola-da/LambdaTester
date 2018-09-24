





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return "-ýi\b"; };
var argument2 = true;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = {"627":8.353356233632349e+307,"655":"L","705":0,"?":-100,"":"L","=zp":1.5143068530888974e+308,"{":655};
var argument6 = null;
var argument7 = function() {
 callbackArguments.push(arguments) 
 return false; };
var argument8 = {"yU":1.9291455605205584e+306,"1.313643781914713e+307":5.613146592542578e+307,"6.759303491753559e+307":"_","1.6262749568691224e+305":"p","":1.4113642416546914e+308,"%":82};
var argument9 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument10 = "";
var argument11 = true;
var base_0 = [714,213,242,242,893,823,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,213,242,242,893,823,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,213,242,242,893,823,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,213,242,242,893,823,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachQC/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)