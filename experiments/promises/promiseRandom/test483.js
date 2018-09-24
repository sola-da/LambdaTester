/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"823":"","Kb`9i":0,"":1.1901138489755842e+308,"Po":3.372624688462316e+307,"4.592104718062252e+307":"","6.058925509131508e+307":6.900679286559904e+307};
var argument2 = {"403":1.493820674767777e+308,"vQ)":"y","1.7976931348623157e+308":213,"b":8.647029874950395e+307,"":100,"|":126,"-1":1.2484910504016066e+308,"3.432931785456675e+307":8.455170510563758e+307,"K":"c,"};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test483.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)