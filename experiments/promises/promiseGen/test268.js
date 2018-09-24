/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument2 = {"82":5.042737251732223e+307,"823":6.512582574059422e+307,"893":"","8.908889453699602e+307":"","2.197171042104744e+307":1.7530905121415614e+308,"|":"'|3","1.015071635404229e+308":"U","1.268960746638557e+308":"gO","K":"S&>N"};
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument4 = "";
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
var argument7 = p2;
var argument8 = [1.7976931348623157e+308,122,59,705,82];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test268.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)