/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -66; }
;
var argument2 = {"WYC":"=","qy<8I":"9","=":"he","iey1=":"","":705,"1.5055689715042052e+308":595,"X":"@(>","S":""};
var argument3 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument4 = function() {
callbackArguments.push(arguments)
 return -26; }
;
var argument5 = {"595":1.5965483011839692e+307,"823":"A","893":"ok(","7.235748130445863e+307":5.024373897619676e+307,"7.584051725610258e+307":59};
var argument6 = null;
var argument7 = function() {
callbackArguments.push(arguments)
 return -50.83717423825254; }
;
var argument8 = true;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test997.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)