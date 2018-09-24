/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument3 = [714,823,655,714,122,122];
var argument4 = false;
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument6 = p2;
var argument7 = {"627":"","655":460,"714":"","1.1721681530854945e+308":1.6284648721934386e+308,"'LX":607,"$":627,"":"U99","1.7721021098007737e+308":1.3659521847268268e+308,"8.88849518256471e+307":1.5036838488846597e+308};
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument9 = "";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test914.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)