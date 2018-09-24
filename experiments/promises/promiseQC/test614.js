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
var argument2 = [82,0,82,783,25,25,969];
var argument3 = {"213":"`q","618":"","893":8.890689500689119e+307,"":"","1.7635741883131193e+308":403,"_N":4.86273452254867e+307,"-100":"","1.1290319456342857e+308":2.808850358062499e+307,"2.807890356169022e+307":1.446934342735146e+308};
var argument4 = function() {
callbackArguments.push(arguments)
 return 46.498340872045475; }
;
var argument5 = "";
var argument6 = function() {
callbackArguments.push(arguments)
 return [true,null,-1,2.8409211969933246]; }
;
var argument7 = null;
var argument8 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument9 = null;
var argument10 = "";
var base_0 = p1
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
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test614.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)