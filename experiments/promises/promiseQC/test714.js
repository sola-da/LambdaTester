/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"242":"|$","d":1.637706200518792e+307,"wO^t&":"","$":"-","":4.1227555196521416e+307,"1.7976931348623157e+308":"z","5.988017183166622e+307":"C","1.146039583086744e+308":""};
var argument2 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = p2;
var argument6 = function() {
callbackArguments.push(arguments)
 return -23.551359105737312; }
;
var argument7 = 8.897570128802995e+307;
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
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test714.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)