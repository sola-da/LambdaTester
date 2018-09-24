/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument2 = null;
var argument3 = 7.772574217835418e+307;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument5 = {"58":242,"627":"","-100":1.557463316082914e+308,"7.364325560135004e+307":"$7`:","":"","7.486977407031938e+307":1.1203531918829646e+308,"j`":2.1165319756951748e+307,"SuK":""};
var argument6 = "";
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument8 = false;
var argument9 = false;
var argument10 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument11 = p2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test567.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)