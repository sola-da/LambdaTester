/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"5.986655635017596e+307":"","":"U","QwR":")","p":"0","7.378673109119064e+306":4.2382872767954244e+307};
var argument2 = 59;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test852.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)