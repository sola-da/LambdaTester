/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument2 = null;
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument4 = null;
var argument5 = true;
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument7 = p1;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument9 = {"157":6.215426360305271e+307,"403":1.3569658157443155e+308,"655":0,"714":";","893":"R","8.644837808847209e+307":607,"":"lm2","^":7.495881670537716e+307,")":627,"-100":""};
var argument10 = {"157":7.772322302718488e+307,"595":1.0794083912205184e+308,"627":"[v","":"mG!2$","1.4034744228995816e+308":"","5.262931091360336e+307":1.7976931348623157e+308,"U":-100};
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
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test142.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)