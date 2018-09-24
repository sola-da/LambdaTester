/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"1":"R?","100":"f,","893":"","H!`":6.554110101001987e+307,"1.3029972395316486e+308":"","4.757529607948014e+307":1.410569720575278e+308,"v:iY ":"","":1.261529410301864e+308,"1.4244318594815474e+308":"@3","-100":100};
var argument2 = {"843":"","1.7976931348623157e+308":843,"1.174680508853266e+308":"T","":25};
var argument3 = 4.2451719528640987e+307;
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test635.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)