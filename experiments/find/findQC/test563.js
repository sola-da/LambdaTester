





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return [null,null]; };
var argument2 = true;
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = {"969":"Y","Z":4.4933286215940074e+307,"":618,"-":1.555483677233843e+308};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -16.191298784554252; };
var argument7 = 1.3570082622184844e+308;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return -52.326441071239735; };
var base_0 = [0,893,783,157,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,893,783,157,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,893,783,157,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,893,783,157,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findQC/test563.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)