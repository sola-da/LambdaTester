/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument2 = {"25":122,"":1.298530573673951e+308,"E2p|E1_":"x","*N":"g","1.1487048473586838e+308":1.7976931348623157e+308,"Z[":1.7294317012239148e+308};
var argument3 = null;
var argument4 = function() {
callbackArguments.push(arguments)
 return -98.34351966174393; }
;
var argument5 = r_0;
var argument6 = {"i":4.511351005472876e+307};
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = p2;
var argument9 = true;
var argument10 = p2;
var argument11 = function() {
callbackArguments.push(arguments)
 return 
"í©ù":false,"í":1,"W\u000e©^¸":false,"\u0015+T":true}; }
;
var base_0 = p2
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
r_1 = base_1.catch(argument4,argument5,argument6)
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
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)