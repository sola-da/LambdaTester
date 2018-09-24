/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -77; }
;
var argument2 = true;
var argument3 = ":V";
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument6 = true;
var argument7 = {"714":1.1248996306831618e+308};
var argument8 = function() {
callbackArguments.push(arguments)
 return 7.908810797673693; }
;
var argument9 = {"0":"","100":"","783":49,"969":1.7976931348623157e+308,"1.4465592624234042e+308":1.5788779111094542e+308,",":"Y#","":"C","*F":0,"b":403,"1.157232635664777e+308":"?"};
var argument10 = "y";
var base_0 = p1
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test398.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)