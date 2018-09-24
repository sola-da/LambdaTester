/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return ["\u001d",0,null,"\"o","\u0015",-5.742072918878699,30.498932415281384]; }
;
var argument2 = null;
var argument3 = p2;
var argument4 = function() {
callbackArguments.push(arguments)
 return -34.68581714171957; }
;
var argument5 = true;
var argument6 = 1.4602689746250422e+308;
var argument7 = function() {
callbackArguments.push(arguments)
 return [null,null,2.874474331319978,null,null,null]; }
;
var argument8 = "#9m+";
var argument9 = null;
var argument10 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument11 = ["7","-?C&Z:"];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)