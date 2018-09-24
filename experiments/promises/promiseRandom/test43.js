/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [-1,157,618,893,157,705,-1];
var argument2 = {"82":2.7798921031962303e+307,"893":3.708017010440178e+307,"969":823,"1.5449155789880386e+308":-100,"FE06ow'Fd":5e-324,"":"","-100":"","rt":"?*","8D*(N)":"","1.236199985155341e+308":1.6867091063331294e+308};
var argument3 = {"25":8.98871574105561e+307,"":"","1.2559538218849188e+308":1.0071186350169818e+308};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test43.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)