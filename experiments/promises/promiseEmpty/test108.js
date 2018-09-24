/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 7.372156513912951e+307;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = null;
var argument5 = {"627":6.847461394243504e+307,"":"","1.5715751892067498e+308":"","<N0":"","8.830621814489701e+307":"+"};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"100":1.281028580461705e+308,"893":8.983212209946155e+307,"1.0204538520119731e+308":"T","1.5312405318891779e+308":"l","[":25,"4.942092149760354e+307":"IrY","-100":100,"":"C","5e-324":"","F,[akEQ":1.106006944086887e+308};
var argument8 = function callback(){callbackArguments.push(arguments)};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test108.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)