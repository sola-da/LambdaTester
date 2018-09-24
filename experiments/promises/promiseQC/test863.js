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
var argument2 = false;
var argument3 = {"25":3.567637315423533e+307,"893":4.885337019839871e+307,"Ar":823,"1.4628787348757736e+308":2.4704675934438263e+307,"2.752184137538193e+307":"","":"W","1.7976931348623157e+308":"","m":"","1.3815630028756644e+308":"G"};
var argument4 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument5 = function() {
callbackArguments.push(arguments)
 return "\"_/«"; }
;
var argument6 = null;
var argument7 = null;
var argument8 = "Kw";
var argument9 = function() {
callbackArguments.push(arguments)
 return 70.56514218086261; }
;
var base_0 = p2
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)