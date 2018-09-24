/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -55.54571278668634; }
;
var argument2 = p2;
var argument3 = {"595":"s","627":"","7.826712100016761e+307":"","":1.7976931348623157e+308,"}":"","1.1401590845392777e+308":25,"u":6.748620114271889e+307,"L4>)":"","1.187877171249869e+308":"S",";s":"y=l90e"};
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = p2;
var argument6 = false;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = false;
var argument9 = ["`6","Po"];
var argument10 = [":","s]"];
var argument11 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument12 = 655;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test469.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)