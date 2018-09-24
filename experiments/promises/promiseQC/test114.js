/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -53.93070013489958; }
;
var argument2 = {"tj+?":783,"pQ$x":"","":9.697199010484112e+307,"t":"","^":100,"9.662135446834708e+307":126,"1.2741711974579375e+308":-1,"1.7488080830457287e+308":242,"=5KF=)'lK":4.08232194559938e+307};
var argument3 = function() {
callbackArguments.push(arguments)
 return -91.15361689832942; }
;
var argument4 = false;
var argument5 = true;
var argument6 = function() {
callbackArguments.push(arguments)
 return "ïYïAnÁ\u0002ì"; }
;
var argument7 = r_1;
var argument8 = r_1;
var argument9 = function() {
callbackArguments.push(arguments)
 return -99; }
;
var base_0 = p1
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
r_1 = base_1.catch(argument3,argument4,argument5)
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
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)