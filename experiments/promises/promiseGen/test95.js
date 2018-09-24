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
var argument2 = true;
var argument3 = {"618":1.3260818703154458e+308,"843":"I",")":6.356427375861096e+307,"-100":"","":"","1.271132031582919e+308":"v_","1.4174178129086238e+308":"+_","3.2933717885721853e+307":2.240288276475877e+307,"S":""};
var argument4 = 627;
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument7 = null;
var argument8 = null;
var argument9 = r_2;
var argument10 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument11 = "Mw";
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test95.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)