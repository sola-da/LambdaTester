/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {};
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument4 = {"126":100,"655":4.453773288167034e+307,"893":9.049759773852002e+307,"1.3555749636832502e+308":"3aA","":"Cj","4.894431419864256e+307":"","[e":100,"1.2870770546619427e+308":"","1.3407979130863208e+308":9.44575866993825e+307};
var argument5 = null;
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument7 = 1.7976931348623157e+308;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument9 = false;
var argument10 = 5.904495945954163e+307;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test874.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)