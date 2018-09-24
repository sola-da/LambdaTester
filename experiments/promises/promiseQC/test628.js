/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = {"1.7630302506737621e+308":714};
var argument4 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument5 = {"R":"","1.769426399846771e+308":49,"Q":"N","K":"N*V","6.827824184568651e+306":"","":1.9189199539311864e+307,"7.454188068195943e+307":9.929648174212228e+307,"1.6587949909746016e+308":""};
var argument6 = {"8":714,"X;":"q","[RA":714,"":"W","1.3626005317479464e+308":1.7143114809741155e+308,"$8vE":""};
var argument7 = function() {
callbackArguments.push(arguments)
 return "\u0007"; }
;
var argument8 = false;
var argument9 = function() {
callbackArguments.push(arguments)
 return "\u0018©\u0011¾Æ"; }
;
var argument10 = null;
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test628.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)