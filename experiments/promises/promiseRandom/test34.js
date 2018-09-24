/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"}":1.1094187330968767e+308,"6.78884413500297e+305":"","":"","O":"F","w":5.194196762362845e+307,"1.936277577683017e+307":"u]","7.685315895069419e+307":1.6514874466787227e+308,"8.055429009809323e+307":5e-324,"5e-324":157};
var argument2 = null;
var argument3 = ["D","YSgn*","lT","Ei",");","U",":","9"];
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test34.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)