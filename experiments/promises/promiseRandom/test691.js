/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"82":1.3534224575454208e+308,"618":"","":1.5687163216180287e+308,"Jm":"Ob[<|","6.397415415551515e+307":1.1833453110569226e+308};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test691.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)