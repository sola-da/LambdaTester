/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = {"783":6.308864418227777e+306,"":1.7352872966023471e+308,"H[Y":893,"6.357788157596447e+307":"","1.3108262771349412e+308":1.4152594606946776e+308,"J":"aq","PAgbyPm":"","7.62241784439409e+306":8.964412382354262e+307,"7.758874326316483e+307":""};
var argument4 = function() {
callbackArguments.push(arguments)
 return [null,-0.4114157723296685,1,1,false,-12,18]; }
;
var argument5 = p2;
var argument6 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument7 = function() {
callbackArguments.push(arguments)
 return -93; }
;
var argument8 = p2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test919.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)