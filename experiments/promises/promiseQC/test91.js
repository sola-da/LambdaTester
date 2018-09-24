/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = false;
var argument4 = function() {
callbackArguments.push(arguments)
 return -60; }
;
var argument5 = true;
var argument6 = {"0":1.0725761664822011e+308,"403":"'|","969":"Hd","-1":627,"":4.939772827742543e+307,"3.7778250210149413e+307":1.7911634845290224e+308};
var argument7 = "m";
var argument8 = function() {
callbackArguments.push(arguments)
 return -58; }
;
var argument9 = {"s=":242,"1.0997858852541743e+308":"J"};
var argument10 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument11 = 49;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)