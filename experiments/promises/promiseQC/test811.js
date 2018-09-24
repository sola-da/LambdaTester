/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -32; }
;
var argument2 = true;
var argument3 = ["f","cR8","b","%","2d","g","d4","q<","Z"];
var argument4 = {"":"I","1.3663714952277783e+308":"sD","5D":"","1.524144055233009e+307":"HAn","8.837899136166445e+307":100,"`":""};
var argument5 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument6 = false;
var argument7 = function() {
callbackArguments.push(arguments)
 return 1.3015328045926866; }
;
var argument8 = p2;
var argument9 = function() {
callbackArguments.push(arguments)
 return "Ký~¥Æ"; }
;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
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
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test811.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)