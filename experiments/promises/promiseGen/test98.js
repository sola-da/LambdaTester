/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument4 = "o";
var argument5 = null;
var argument6 = null;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument8 = {"627":6.847461394243504e+307,"":"","1.5715751892067498e+308":"","<N0":"","8.830621814489701e+307":"+"};
var argument9 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_3
};
var argument10 = {"2":"C","7.341347301373735e+307":"","2.420817284950636e+307":"","1.4193015057687152e+308":4.3405659795806766e+307,"":-1,"1.1223924430326623e+308":"m","%<":"","4.1287088569249626e+307":"","5e-324":"","F,[akEQ":1.106006944086887e+308};
var base_0 = p2
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
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
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test98.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)