/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 1.0184961047956091e+308;
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = ["]F"];
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"100":7.907258464273994e+307,"":"YYr","7.01287694956108e+307":1.7733320229902411e+308,"8.470017191379436e+307":"Kv","bjn":1.0414621755576014e+308,"8.405250956246933e+307":"[t","K'":1.5847438130256285e+308,"9.569002985309172e+307":""};
var argument6 = "";
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = null;
var argument9 = 4.605175885056754e+307;
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = "r_3";
var base_0 = p1
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test680.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)