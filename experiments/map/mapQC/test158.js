





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return -35.14492895133772; };
var argument2 = null;
var argument3 = true;
var argument4 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument5 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument6 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument7 = "";
var argument8 = ["o4","|","pY",",","c","5qh_","Me|","qq5","f]"];
var base_0 = [")","s",595,"H","IIs",969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapQC/test158.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)