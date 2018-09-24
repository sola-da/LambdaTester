/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return [-0.1581321704722347,-0.15987822646977068,0.6651628051557976,-2.8930867725342715,-3,null,false,-47.6937481438207]; }
;
var argument2 = r_0;
var argument3 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument4 = r_0;
var argument5 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument6 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument7 = {"823":"n`","9.731670291840328e+307":-1,"1.1705882245452176e+308":8.195430350352284e+307,"1.3064412294633565e+308":""};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test461.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)