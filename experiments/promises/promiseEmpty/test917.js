/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"122":1.1314923760512652e+308,"460":"","1.4648946788439138e+308":7.495211305190054e+307,"_IQ8":100,"1.5474898023762937e+308":"","lLT":"","r":"Oj","R":""};
var argument3 = [25,655,783,49,49,843];
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = {"100":"9!`z","1.578290327263916e+307":"c","1.5556897368562238e+307":"1","1.1205084093738306e+308":714};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"1.00189946106917e+308":"V","":627,"B^":403,"1.7976931348623157e+308":9.82105098921328e+307,"@":2.9996219801984854e+307,"ip":705,"yH":"","1.7954035851241233e+306":1.3391137942232045e+308,"1.5774325420797175e+308":4.760889827248847e+307};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test917.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)