/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return 36.37296691882439; }
;
var argument2 = null;
var argument3 = function() {
callbackArguments.push(arguments)
 return 90.89721653030989; }
;
var argument4 = {"h1":823,"1.0966991316558096e+308":8.042882782039734e+307};
var argument5 = function() {
callbackArguments.push(arguments)
 return 66.78223189160644; }
;
var argument6 = {"":157,"1.031095186017137e+308":"","2.822883189696247e+307":""};
var argument7 = null;
var argument8 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument9 = {"25":25,"":"","L":"","+":""};
var argument10 = 607;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test325.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)