/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return 25.60858377832158; }
;
var argument2 = false;
var argument3 = function() {
callbackArguments.push(arguments)
 return -32; }
;
var argument4 = null;
var argument5 = 1.6163194153057943e+308;
var argument6 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument7 = false;
var argument8 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument9 = null;
var argument10 = {"1.673344348970577e+308":1.7289657853343458e+308,"7.877436048858205e+307":1.5581547027328272e+308,"9.85940802023135e+307":126};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test517.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)