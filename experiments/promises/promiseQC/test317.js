/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument3 = false;
var argument4 = p1;
var argument5 = function() {
callbackArguments.push(arguments)
 return 66.52801036019093; }
;
var argument6 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument7 = {"1.7761474972312487e+308":25,"":"Dlbb","4.797078780672375e+307":8.925090471369404e+307};
var argument8 = function() {
callbackArguments.push(arguments)
 return -26; }
;
var argument9 = {"s":1.7288368398529896e+308,"1.515232526865775e+308":1.1568746137956219e+308,"":823};
var argument10 = ")8(";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test317.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)