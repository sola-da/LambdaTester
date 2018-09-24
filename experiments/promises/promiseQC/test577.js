/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "Q";
var argument2 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument3 = {"126":5.691857725744797e+307,"843":1.2820883038964174e+308,"MMfW":"","":"","6.699499322332541e+306":714,"4.953791384496108e+307":969,"-(8v":783};
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = r_0;
var argument6 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = null;
var base_0 = p1
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
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test577.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)