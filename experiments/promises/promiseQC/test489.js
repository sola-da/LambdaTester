/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function() {
callbackArguments.push(arguments)
 return "iîé_\u0007q"; }
;
var argument3 = null;
var argument4 = function() {
callbackArguments.push(arguments)
 return [0,false,null,-4,true,-6.177741491640576,false,null]; }
;
var argument5 = p2;
var argument6 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument7 = {"157":122,"213":"","5e-324":5.4380189629821086e+306,"":"f","1.0213037678442021e+308":1.1143805735126662e+306,"5.768198424970195e+307":4.2621328578780377e+307,",U":"","5.363145681208597e+307":607};
var argument8 = false;
var argument9 = function() {
callbackArguments.push(arguments)
 return 23.944308712023865; }
;
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
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test489.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)