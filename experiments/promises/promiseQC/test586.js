/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return 16; }
;
var argument2 = p1;
var argument3 = p2;
var argument4 = function() {
callbackArguments.push(arguments)
 return 33.315545518287834; }
;
var argument5 = function() {
callbackArguments.push(arguments)
 return 83.91721217021737; }
;
var argument6 = function() {
callbackArguments.push(arguments)
 return 10; }
;
var argument7 = {"714":0,"":"<cP>u(;","Es6:":"","1.7131455901370266e+308":""};
var argument8 = {"893":"","1.9314447616546257e+307":49,"":618,"*k":6.348318171591016e+307,"e":"","1.3301876240404417e+308":460};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test586.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)