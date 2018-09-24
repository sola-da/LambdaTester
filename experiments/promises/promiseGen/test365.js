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
var argument2 = [627,843,403,242,969];
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument4 = r_1;
var argument5 = p2;
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument7 = {"49":1.7152186069107576e+308,"":"bl","$eDV":"<",">":1.6721628005920914e+308,"8.17796622281812e+307":"","2.1587517445830649e+307":1.1534930819651836e+308,"j":"",":I":"yO"};
var argument8 = null;
var argument9 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument10 = p2;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
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
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)