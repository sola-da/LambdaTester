





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 87.63999050999428; };
var argument2 = true;
var argument3 = r_0;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = null;
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -33.024187179745844; };
var argument7 = {"5":"QL","242":5.693510265776069e+307,"714":1.3059172539879942e+308,"5.430143532888192e+307":1.092362053572321e+308,"1.8217412447577325e+307":-1};
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -3.646086008720917; };
var argument9 = r_0;
var argument10 = null;
var base_0 = ["A","X","++m","j"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["A","X","++m","j"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["A","X","++m","j"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["A","X","++m","j"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyQC/test836.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)