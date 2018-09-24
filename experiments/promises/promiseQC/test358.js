/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return "ò~*)\u001dI<×"; }
;
var argument4 = p2;
var argument5 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument6 = {"1":"","93":"lo","403":-100,"705":1.0135003480084612e+308,"":618,"9.050177264162202e+307":"","1.2271204989851682e+308":969,"1.3762563598095363e+308":"f`d#","7.780138533208252e+306":""};
var argument7 = r_1;
var argument8 = function() {
callbackArguments.push(arguments)
 return 77.64915321623893; }
;
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
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test358.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)