/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument3 = p2;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument5 = {"403":59,"8.654114738720045e+307":"0p","5.343721425474771e+307":9.035318497379853e+307,"01":100,"":607,"O":1.7705134176985786e+308,"2.7794592975097733e+307":1.2960284157390719e+308};
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument7 = false;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument9 = false;
var argument10 = p1;
var base_0 = p2
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test208.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)