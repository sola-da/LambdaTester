/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return 17; }
;
var argument2 = p1;
var argument3 = function() {
callbackArguments.push(arguments)
 return -26; }
;
var argument4 = {"25":122,"607":157,"C_o[":"","h":3.1531802157249654e+307,"9.671944385054846e+307":"","N,":"Jnt","":8.818157972198254e+307,"j":1.6743865941724667e+308};
var argument5 = function() {
callbackArguments.push(arguments)
 return "Dut6.D"; }
;
var argument6 = p1;
var argument7 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument8 = true;
var argument9 = {"4.907138319665248e+307":"q9m"};
var base_0 = p1
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
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test419.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)