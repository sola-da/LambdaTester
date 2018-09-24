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
var argument2 = p2;
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument4 = {"5":"","82":"","595":"","823":"","843":705,"-100":2.317924096085026e+307,"":"","1.6818448801584935e+308":460,"1.1066051569338208e+308":"","L":8.240952960374957e+307};
var argument5 = r_0;
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument8 = r_0;
var argument9 = r_2;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test52.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)