/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -44.29695904643927; }
;
var argument2 = p2;
var argument3 = 1.3792740586263997e+308;
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = r_0;
var argument6 = r_1;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = {"9":5.967415330871946e+307,"242":"{[*a ","460":"%","":3.928820411600639e+307,"1.7946151203378868e+308":1.6134154063521242e+308};
var argument9 = [843,460,-100,100,403,157,126];
var argument10 = function() {
callbackArguments.push(arguments)
 return "¢hÕ÷"; }
;
var argument11 = {"":"[","Aa&":1.709805488705382e+308,"x":655,"1.1337326592472868e+308":1.530992591591799e+308,"8.028553293091058e+307":"w","!,'!|2":"^7","5.687793573896889e+307":""};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test822.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)