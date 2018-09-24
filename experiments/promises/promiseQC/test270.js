/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return "+Ú¾òCÉ"; }
;
var argument2 = null;
var argument3 = function() {
callbackArguments.push(arguments)
 return ")ó"; }
;
var argument4 = false;
var argument5 = function() {
callbackArguments.push(arguments)
 return -13; }
;
var argument6 = 1.194368005044197e+308;
var argument7 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument8 = {"7.997035641364563e+307":"RLX","":"","1.75273847064817e+308":"","1.585340262681923e+308":1.3525734672468675e+308,"4.1249855321716053e+307":"Fn"};
var argument9 = {"627":"m","1.6633790894557595e+308":893,"4.0863214550114195e+307":783,"2.329586229988876e+307":242,"9.87584936400125e+307":""};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test270.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)