/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"b":49,"K%+]nk":157};
var argument2 = function() {
callbackArguments.push(arguments)
 return -9; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return 29; }
;
var argument4 = {"126":"% -$","655":"","1.3697700927298416e+308":"X`","":"","4.2417447168417806e+307":"X9","?*":"8D*(N)"};
var argument5 = {"25":8.98871574105561e+307,"82":2.7798921031962303e+307,"122":157,"595":"","969":823,"":"6","1.236199985155341e+308":1.6867091063331294e+308,"1.2559538218849188e+308":1.0071186350169818e+308,"$d":242,"=":"u"};
var argument6 = function() {
callbackArguments.push(arguments)
 return 49; }
;
var argument7 = r_1;
var argument8 = p1;
var argument9 = p1;
var argument10 = function() {
callbackArguments.push(arguments)
 return false; }
;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test26.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)