/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = p2;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = 783;
var argument5 = {"714":4.736863204667712e+307,"A":"x-","":"&zm"};
var argument6 = ["%VWC","<","@","g","j"];
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"607":1.7976931348623157e+308,"893":157,"|":6.039883032163697e+307,"":"]}","H":0};
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = true;
var argument11 = {"823":"","9.28837226484702e+307":"UxP","-100":6.837662664354741e+307,"[P":"","":"","3.0554588507810724e+306":"q}","A":0,"8.324652984609109e+307":157};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
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
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test201.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)