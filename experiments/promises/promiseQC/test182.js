/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"25":-1,"893":607,"":"","1.203936807675754e+308":403,"4.541040552891128e+307":"","7.428990757376543e+307":2.522470287095311e+307,"1.7122782250156553e+308":783};
var argument2 = function() {
callbackArguments.push(arguments)
 return -99; }
;
var argument3 = 8.102867786406059e+307;
var argument4 = function() {
callbackArguments.push(arguments)
 return 58.87251027004985; }
;
var argument5 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument6 = null;
var argument7 = null;
var argument8 = "r_3";
var argument9 = function() {
callbackArguments.push(arguments)
 return -7.782098041562935; }
;
var argument10 = p2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test182.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)