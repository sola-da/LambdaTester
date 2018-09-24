/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument2 = r_0;
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument4 = true;
var argument5 = null;
var argument6 = r_0;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument9 = "";
var argument10 = {"213":"","655":"d5t","i7":"D","TN":1.2728712956968132e+308,"1.2493277621117124e+308":"","1.6513316899973652e+308":843,"1.4558911257947117e+308":1.4400994143766396e+308,"C2":627};
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)