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
var argument2 = null;
var argument3 = {"655":7.992786139696397e+307,"714":969,"893":1.6844678703447948e+308,"5e-324":403,"7.241644360162534e+306":2.4701208254745016e+307,"7.103096051847379e+307":1.0575782432476865e+308,"":"","9.049759773852002e+307":1.3555749636832502e+308};
var argument4 = function() {
callbackArguments.push(arguments)
 return 66; }
;
var argument5 = p2;
var argument6 = function() {
callbackArguments.push(arguments)
 return 58; }
;
var argument7 = p1;
var argument8 = false;
var argument9 = function() {
callbackArguments.push(arguments)
 return " p¹2M"; }
;
var argument10 = r_1;
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test983.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)