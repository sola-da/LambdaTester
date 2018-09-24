/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument3 = {"5":6.051960320228408e+307,"823":"E","1.9647769378756072e+307":"d","":100,"1.2511337915758324e+308":1.4446550868757907e+308,"1.670870509128935e+308":"x","3.597843849061993e+307":7.240019299149309e+307,"1.595054039104276e+307":"r","8.444544937135552e+307":893};
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument5 = 655;
var argument6 = false;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument9 = "f!BO";
var argument10 = null;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test471.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)