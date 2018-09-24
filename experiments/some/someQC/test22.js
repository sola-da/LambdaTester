





var callbackArguments = [];
var argument1 = function() {
 callbackArguments.push(arguments) 
 return true; };
var argument2 = 1.1238882694782023e+308;
var argument3 = function() {
 callbackArguments.push(arguments) 
 return [-0.6094595684399067,true,false,1,null,0.3903186361759736,16.131580281215545,null]; };
var argument4 = function() {
 callbackArguments.push(arguments) 
 return undefined; };
var argument5 = "o[JtK";
var argument6 = ["L","O_"];
var argument7 = function() {
 callbackArguments.push(arguments) 
 return 51.97563762943231; };
var argument8 = false;
var base_0 = [0,59,893,"@","L+",403]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,59,893,"@","L+",403]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,59,893,"@","L+",403]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,59,893,"@","L+",403]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someQC/test22.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)