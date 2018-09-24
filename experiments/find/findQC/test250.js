





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = ";$N";
var argument3 = null;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return {"U":"¥","é&d[¹¯5":false,"2\u0017G]sQôoë":true,"H":true,"·":-13.06635574894578,"á¤­1É":"×rç\u001d","ê\u0013:\u0002z\u0004|Ô":false,"1\u0004A\u0015DÃL":31}; };
var argument5 = {"":4.925950673864633e+307};
var argument6 = function() {
 callbackArguments.push(arguments) 
 return -75; };
var argument7 = false;
var argument8 = function() {
 callbackArguments.push(arguments) 
 return false; };
var base_0 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}","J","X","9","f","lW","dN",";","rzh"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}","J","X","9","f","lW","dN",";","rzh"]
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
require("fs").writeFileSync("./experiments/find/findQC/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)