/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 122;
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument3 = r_0;
var argument4 = p1;
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument7 = {"4":")","122":"","403":"","893":783,"969":783,"1.0583926295170147e+308":595,"":1.4805221949558912e+308,"o":242,"6.805671506347077e+307":5.012887173795741e+307,"1.7783794731378768e+308":""};
var argument8 = null;
var argument9 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
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
r_1 = base_1.then(argument4,argument5)
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
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test60.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)