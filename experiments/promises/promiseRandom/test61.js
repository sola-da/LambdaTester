/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [403,783,213,843,0,607,213,242,59];
var argument2 = 1.5822478017454276e+308;
var argument3 = [122,627,5e-324,403,-100,25,100];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test61.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)