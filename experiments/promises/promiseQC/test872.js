/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function() {
callbackArguments.push(arguments)
 return [[],0.8961035990761796,null,false,15.01790991971546,0]; }
;
var argument3 = {"403":9.885192399648506e+307,"618":969,"969":"","_":"","":0,"9.895294639369108e+307":82,"ff":"B18","[J[m":893};
var argument4 = function() {
callbackArguments.push(arguments)
 return 0; }
;
var argument5 = r_0;
var argument6 = ["mq","4","Cd"];
var argument7 = function() {
callbackArguments.push(arguments)
 return "]¼Q¡õ"; }
;
var argument8 = function() {
callbackArguments.push(arguments)
 return [0.6353385109013556,false,null,6]; }
;
var argument9 = true;
var argument10 = "";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test872.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)