/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return "0käò¢ÉI\r"; }
;
var argument2 = null;
var argument3 = false;
var argument4 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument5 = {"8.577986059657043e+307":"","F1":2.460852935942085e+307,"1i":403,"1.6847829155480419e+308":1.186713128333116e+308};
var argument6 = true;
var argument7 = ["K","iCP",")tAxt","0E","?","FKY`pKPHNw^D","c","o7","#"];
var argument8 = function() {
callbackArguments.push(arguments)
 return 14.050481990594289; }
;
var argument9 = p2;
var argument10 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument11 = p2;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
r_3 = base_3.then(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test830.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)