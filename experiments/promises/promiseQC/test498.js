/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument2 = 3.08319175946755e+307;
var argument3 = function() {
callbackArguments.push(arguments)
 return -19.388334632896065; }
;
var argument4 = ["k",-100,"l","5aD|s","2"];
var argument5 = {"823":627,"969":8.787776891783897e+307,"`":"","":"`}Y","1.5576545106665314e+308":"","'":627,"6.055931893934415e+307":"","1.47132868508043e+308":403,"x=":"","8.351701769530248e+307":"j"};
var argument6 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument7 = function() {
callbackArguments.push(arguments)
 return -94.76216589268596; }
;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test498.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)