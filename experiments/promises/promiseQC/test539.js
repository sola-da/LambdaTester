/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"242":8.350344321215067e+307,"714":"","783":122,"1.312948168388015e+308":5.295768566459784e+307,"q":1.5472632292957326e+308,"6.108083771579453e+307":"uX","8.749676224902249e+307":"","3.533981808651601e+307":""};
var argument2 = function() {
callbackArguments.push(arguments)
 return 39; }
;
var argument3 = true;
var argument4 = function() {
callbackArguments.push(arguments)
 return 9.048594341671912; }
;
var argument5 = p2;
var argument6 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument7 = function() {
callbackArguments.push(arguments)
 return "\f"; }
;
var argument8 = p2;
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
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)