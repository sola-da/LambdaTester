/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"0":1.0725761664822011e+308,"122":1.1646923884270834e+308,"403":"'|","969":"Hd","-1":627,"6.35835422689131e+307":6.902941210924748e+307,"4.0863954658899997e+307":1.0404908139264613e+308,"":1.1933243873818743e+308,"3.7778250210149413e+307":1.7911634845290224e+308};
var argument2 = {"s=":242,"1.0997858852541743e+308":"J"};
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test203.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)