/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function() {
callbackArguments.push(arguments)
 return 95.83783145577635; }
;
var argument3 = p2;
var argument4 = function() {
callbackArguments.push(arguments)
 return 91.0508281494603; }
;
var argument5 = function() {
callbackArguments.push(arguments)
 return 10.67801112757083; }
;
var argument6 = false;
var argument7 = {"0":"","122":5.433424559864274e+307,"403":"v","1.279634329636407e+308":8.387620600470592e+307,"":1.723007478615662e+308};
var argument8 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument9 = "";
var argument10 = [25,5e-324,893];
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test128.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)