/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = ["sw","c]09","J#(K","X9","p","g","u)%e2Q7",">"];
var argument2 = [";","3","K","wm*","wE","Xdo(CM","?W","nw","q","H"];
var argument3 = 1.0968822372133906e+308;
var base_0 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test893.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)