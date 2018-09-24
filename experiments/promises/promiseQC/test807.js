/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function() {
callbackArguments.push(arguments)
 return ""; }
;
var argument3 = [122,59,627];
var argument4 = null;
var argument5 = function() {
callbackArguments.push(arguments)
 return -16.168220307308; }
;
var argument6 = null;
var argument7 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument8 = null;
var argument9 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument10 = true;
var argument11 = {"100":"`","242":"","595":"(","607":213,"618":"s","969":"",";":"G^:&","1.0897529411908646e+308":6.718088363863973e+307};
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
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test807.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)