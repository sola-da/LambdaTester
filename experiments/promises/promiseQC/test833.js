/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"783":213,"9s":9.9198391644433e+307,"":"","*<":"Z,{9","[":823,"-100":1.2224973643290499e+308,"5.438232499668677e+307":5e-324};
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = {"0":"","595":"1","705":"","823":9.437723817866675e+307,"1.6149726084213438e+308":6.056904011540616e+307,"":""};
var argument4 = null;
var argument5 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument6 = false;
var argument7 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument8 = ">,";
var argument9 = function() {
callbackArguments.push(arguments)
 return "?î"; }
;
var argument10 = false;
var argument11 = [0,783,-100];
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)