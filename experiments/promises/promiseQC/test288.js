/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function() {
callbackArguments.push(arguments)
 return 83; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return 62.71895358744257; }
;
var argument4 = {"157":1.2803117002004353e+308,"783":3.977658813138386e+306,"y":-1,"":"b"};
var argument5 = {"4":823,"100":6.162874255357268e+307,"126":4.3453656916368807e+307,"242":9.937371213103693e+307,",g":4.318802207124417e+306,"":"","7.77552946398194e+306":"P","1.26522163134027e+308":1.0276898003560138e+308,"a]'":7.387755180548353e+306};
var argument6 = true;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = p2;
var argument9 = function() {
callbackArguments.push(arguments)
 return true; }
;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
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
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test288.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)