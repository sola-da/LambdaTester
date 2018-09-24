/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument2 = {"100":1.4786242199779435e+308,"627":8.786098120522511e+307,"714":1.204477070740724e+308,"843":"","5e-324":1.630533634636979e+308,"N7":1.7781979659972651e+308,"b":126,"":"","1.1541351192563833e+308":""};
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
var argument4 = r_1;
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument6 = null;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument8 = {"C":3.113408531711789e+307,"-1":8.177909796334979e+307,"":"","o":1.0361458382940152e+308,"+":"","D":",`"};
var argument9 = 1.7976931348623157e+308;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test83.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)