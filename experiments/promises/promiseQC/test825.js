/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument2 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument4 = 893;
var argument5 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument6 = {"213":"1g","%)8":1.592552890857441e+308,"1.275488562355602e+308":7.856769037865154e+307,"8.295928462343015e+307":655,"":157,"3.4065060176596717e+307":"","8.270091853663227e+307":"","3.1741205267600205e+307":1.5694318654500385e+308,"*c":595,"b":59};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument3)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test825.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)