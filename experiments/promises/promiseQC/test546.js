/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"59":"pq","`":"","8.532184654364648e+307":"+","8.720403149100709e+307":1.6924573318225972e+308,"H&$J":"Ezdx","1.7976931348623157e+308":"ueSF","Eo":1.318965858079362e+308,"":";Cy6B%"};
var argument2 = function() {
callbackArguments.push(arguments)
 return 17; }
;
var argument3 = null;
var argument4 = 655;
var argument5 = function() {
callbackArguments.push(arguments)
 return -1.8993506180531083; }
;
var argument6 = [655,627,714,25,714,607,595,59,627];
var argument7 = function() {
callbackArguments.push(arguments)
 return -99; }
;
var argument8 = r_0;
var argument9 = r_2;
var argument10 = function() {
callbackArguments.push(arguments)
 return "'\u001f"; }
;
var argument11 = p2;
var argument12 = null;
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test546.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)