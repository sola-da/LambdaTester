/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument3 = {"0":157,"607":"q&:","":893,"4.851341339393063e+307":"]","2.4317743827313965e+307":2.0986165717508823e+307,"}#u":1.7444818841836373e+308,"4.364101042681755e+306":1.6765432452191236e+307,"1.3636977680355524e+308":"Ir"};
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument5 = p1;
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument7 = 969;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_3
};
var argument9 = "";
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)