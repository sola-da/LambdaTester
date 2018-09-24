/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function() {
callbackArguments.push(arguments)
 return 20; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument4 = p1;
var argument5 = r_0;
var argument6 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument7 = p1;
var argument8 = {"49":"%","714":7.120328393633472e+307,"":1.7976931348623157e+308,"2.5972338163579468e+306":"gr","5.739174656274552e+307":"2i[%","u$a":"I3","1.7804986861786532e+308":460,"C":460};
var argument9 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument10 = p1;
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
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)