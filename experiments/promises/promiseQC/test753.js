/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return ["ï",true,"o5",null,-6,null]; }
;
var argument2 = {"627":"","1.7444150672620903e+307":"","9.80321477170716e+307":1.7565358006766173e+308,"1.4620647425243548e+308":"UZt%%f","6.800943864054449e+307":1.5737683753477203e+308};
var argument3 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument4 = null;
var argument5 = function() {
callbackArguments.push(arguments)
 return "¾(àÔH\bÙ"; }
;
var argument6 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument7 = null;
var argument8 = [122,607,"88B",618,";YE[-)","#f","*",618,59,242];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)