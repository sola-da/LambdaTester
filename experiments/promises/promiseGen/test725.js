/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = ["cGR","k;y","<"," ","^r6D"];
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument3 = null;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
var argument5 = {"1":2.460852935942085e+307,"242":460,"714":157};
var argument6 = p1;
var argument7 = p2;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument9 = {"0":"","100":"i","242":"G","5.959905776820056e+307":126,"6.758388084412298e+307":1.6735330079278722e+308,"":"","A":"","5.427657943617157e+307":"","!":"2;"};
var argument10 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument11 = {"655":"Zf","":"j","_<JM":"Dj","1.0981162776278754e+308":1.4335782365460443e+308,"R":655};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test725.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)