





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return 97; };
var argument2 = function() {
 callbackArguments.push(arguments) 
 return 36; };
var argument3 = true;
var argument4 = null;
var argument5 = function() {
 callbackArguments.push(arguments) 
 return 28.094468744209777; };
var argument6 = ["gG","I","s(S:C","#"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var base_0 = ["DQ&t","E","D","z<"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["DQ&t","E","D","z<"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapQC/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)