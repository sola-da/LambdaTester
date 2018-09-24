/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -51.407641584899636; }
;
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = {"655":49,"823":"d","893":"F","]7<":"","":0};
var argument4 = r_1;
var argument5 = function() {
callbackArguments.push(arguments)
 return 20; }
;
var argument6 = {"":"","xvAvh]":"","2)":1.7976931348623157e+308,"4.0835000285171085e+307":1.0196370698342615e+308};
var argument7 = true;
var argument8 = function() {
callbackArguments.push(arguments)
 return -35; }
;
var argument9 = [607,5e-324,595,607,82];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3,argument4)
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
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test506.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)