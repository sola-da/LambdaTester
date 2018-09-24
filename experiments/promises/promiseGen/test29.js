/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument4 = true;
var argument5 = ["T@",655,"Jgr",618,"1","G2i[%",1.7976931348623157e+308];
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument8 = {"122":59,"460":49,"714":1.3835138961893609e+308,"7.120328393633472e+307":"C","%":"A",")1":"","":"","1.3266498002819796e+308":"","4.567409223336656e+307":"","8.760754423186727e+307":""};
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
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test29.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)