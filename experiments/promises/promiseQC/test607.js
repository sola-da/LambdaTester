/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return false; }
;
var argument2 = [100,783,82,25,460,460,100];
var argument3 = true;
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = true;
var argument6 = p2;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = true;
var argument9 = 1.6457724807718468e+308;
var argument10 = function() {
callbackArguments.push(arguments)
 return -17.9332371540875; }
;
var argument11 = {"122":"P2jq","627":"","g":"","":1.3948995194457116e+308,"1.6691501333502618e+308":"","-1":705,"1.5901534578742586e+308":1.352052056972924e+308,"9.347255630351497e+307":""};
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test607.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)