/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"4":823,"100":6.162874255357268e+307,"126":4.3453656916368807e+307,"242":9.937371213103693e+307,",g":4.318802207124417e+306,"":"","7.77552946398194e+306":"P","1.26522163134027e+308":1.0276898003560138e+308,"a]'":7.387755180548353e+306};
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument3 = null;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument5 = r_1;
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test259.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)