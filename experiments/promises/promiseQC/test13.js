/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [126,-100,627,49,25];
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = 5.668534097182985e+307;
var argument4 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument5 = p1;
var argument6 = p1;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = {"":1.1719108908125572e+308,"1.6871133625226234e+308":"ZU"};
var argument9 = [595,49,-1,122,460];
var argument10 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument11 = null;
var argument12 = "r_3";
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
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
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test13.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)