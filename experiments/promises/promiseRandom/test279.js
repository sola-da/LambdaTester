/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {">4Zm":25,"d":"Ar"};
var argument2 = {"2":"C","7.341347301373735e+307":"","2.420817284950636e+307":"","1.4193015057687152e+308":4.3405659795806766e+307,"":-1,"1.1223924430326623e+308":"m","%<":"","4.1287088569249626e+307":"","5e-324":"","F,[akEQ":1.106006944086887e+308};
var argument3 = [783];
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test279.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)