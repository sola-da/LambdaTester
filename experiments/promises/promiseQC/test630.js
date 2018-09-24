/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 1.4095202927250473e+308;
var argument2 = function() {
callbackArguments.push(arguments)
 return 44; }
;
var argument3 = p1;
var argument4 = function() {
callbackArguments.push(arguments)
 return 73.41655574692147; }
;
var argument5 = r_0;
var argument6 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument7 = p1;
var argument8 = r_2;
var argument9 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument10 = {"0":1.2818191948412552e+308,"607":"q","":"","r":"I","1.1695113006728983e+308":"Gg"};
var argument11 = 6.018148228085477e+307;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)