/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = r_0;
var argument2 = function() {
callbackArguments.push(arguments)
 return 23.832772734896235; }
;
var argument3 = p1;
var argument4 = function() {
callbackArguments.push(arguments)
 return [null,true,-2.012919569445579,"yØe",true,-5,"7¨ý"]; }
;
var argument5 = null;
var argument6 = function() {
callbackArguments.push(arguments)
 return 47.130618551867265; }
;
var argument7 = r_1;
var argument8 = null;
var argument9 = function() {
callbackArguments.push(arguments)
 return "\fé¹"; }
;
var argument10 = {"1.7139929203133932e+308":1.6779170922876238e+308,"O":607,"":3.012078760003689e+306};
var base_0 = p1
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
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)