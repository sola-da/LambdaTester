/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = {"59":"","":"","S":"","4.1206974229972455e+307":"","1.0601777204465004e+308":"n[b","2.1128937280488696e+307":""};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = null;
var argument6 = function callback(){callbackArguments.push(arguments)};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test644.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)