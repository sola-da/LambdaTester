/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function() {
callbackArguments.push(arguments)
 return 43.3345496310954; }
;
var argument3 = {"1.336409406776696e+308":1.733161054803479e+308,"":893,"v[z":0,"1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_"};
var argument4 = function() {
callbackArguments.push(arguments)
 return 6; }
;
var argument5 = p2;
var argument6 = null;
var argument7 = function() {
callbackArguments.push(arguments)
 return -37.63923921357102; }
;
var argument8 = "9";
var argument9 = [714,82,595,1.7976931348623157e+308,49,969];
var argument10 = function() {
callbackArguments.push(arguments)
 return 0; }
;
var argument11 = 5.347103553782397e+307;
var argument12 = p1;
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
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)