/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "";
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument4 = 126;
var argument5 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument6 = function() {
callbackArguments.push(arguments)
 return "ÜmC³Ç½"; }
;
var argument7 = {"618":893,"969":"","2.7965271306320285e+307":",","1.0190629547603984e+308":6.290581964908554e+307,"":"","1.0332319288579883e+308":"Y","1.3548608996134217e+308":"i","Y[":"","k":595,"g7":59};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)