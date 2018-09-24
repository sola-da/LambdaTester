/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = {"2":618,"627":"","":1.585340262681923e+308,"-1":"","1.1665178431473182e+308":126,"1.7320073382810557e+308":1.75273847064817e+308,",":"","1.3525734672468675e+308":4.1249855321716053e+307,"Fn":9.518434361342049e+307};
var argument3 = {"627":"m","1.2225729806921863e+307":1.593152294247785e+308,"":1.2917197125825433e+307,"2.329586229988876e+307":242,"9.87584936400125e+307":"","e":"rI","w":"HRfz","xYP{X8":"rui"};
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test639.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)