/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"126":1.5256914186531844e+308,"595":595,"Jho":5e-324,"-":1.5281506541864616e+308,"2.654465800315281e+307":"","":-100,"3.7668525981726295e+307":783,"Q]L":"_l]s","6&[":"","2,6_g]1":""};
var argument2 = [157,783,122,595,25];
var argument3 = [0,49,893,82,893,0,-100,82,0,1.7976931348623157e+308];
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test42.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)