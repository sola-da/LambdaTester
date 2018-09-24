/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"403":"x","618":1.2865599954824027e+308,"3.470375193816258e+307":"","n":"zE","":"","1.7359289006045078e+308":4.599950225453652e+307,"MuK":5e-324,"1.3437009246567747e+308":460};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = {"7.995772636463183e+307":"","V":823,"[;":595};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = p1;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = ["6k2","g","d","G","oP3h","6","P","%5"];
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = r_0;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test544.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)