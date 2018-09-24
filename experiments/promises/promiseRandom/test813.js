/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "Fc";
var argument2 = "";
var argument3 = {"25":6.628933600183964e+307,"655":1.1511003551399491e+308,"893":"","":"","1.4307309464220499e+308":"[F7","1.7976931348623157e+308":1.5159558975509078e+308,"g":242,"1.4378891843085096e+308":"","1.4280479664095883e+308":213,"4.766889644010816e+307":1.2886903440520073e+308};
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test813.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)