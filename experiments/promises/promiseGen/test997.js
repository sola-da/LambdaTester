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
var argument2 = p1;
var argument3 = p2;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument6 = [" ","#","L","]Y","bQ","z","@","<","uf&","g!U["];
var argument7 = p1;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_3
};
var argument9 = [714,1.7976931348623157e+308,242,823,595,893,655,82];
var argument10 = false;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test997.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)