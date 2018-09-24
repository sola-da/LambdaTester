/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"25":1.0432927967811147e+308,"969":"uN","6.393164411584145e+307":969,"1.2497306840197869e+308":5.592556221293803e+307,"":-1,"cG'":";ww{1F","6.829500784486032e+307":"","7.981824869836094e+307":""};
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = function() {
callbackArguments.push(arguments)
 return 65.21147374078767; }
;
var argument4 = null;
var argument5 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument6 = null;
var argument7 = p2;
var argument8 = true;
var argument9 = function() {
callbackArguments.push(arguments)
 return 99; }
;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test94.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)