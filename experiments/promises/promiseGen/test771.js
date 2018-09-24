/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument3 = null;
var argument4 = {"242":"","618":"M","8.606364880503901e+307":9.582379970235081e+307,"4.397743439412942e+307":"e4","2.4069430386738567e+307":5e-324,"1.7590099391463304e+308":783,"":8.632761298071421e+307,"n(:":3.4429645317548083e+307,"!+V":"S","2.0625510375405084e+307":1.4307839945916214e+308};
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument6 = 1.2915361572360492e+308;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
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
r_1 = base_1.catch(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test771.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)