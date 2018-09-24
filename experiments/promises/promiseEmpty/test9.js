/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"0":"=v","2":1.2215858579413061e+307,"607":"","705":5.069830540616556e+307,"893":1.4536617123292348e+308,"1.5960736029641476e+308":"d","":"","f":1.4491847584408095e+307,"9.02032713536931e+307":1.4834103317200468e+308,"6.636041156642326e+307":"G"};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = {"":"|","1.3463009577694051e+308":"","!":"","8.143137626455915e+307":1.2260543441987487e+308,"1.1266870669512564e+308":"M","x":0,"B":"","1.366334416165349e+306":2.009102217549682e+307};
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = "";
var argument7 = function callback(){callbackArguments.push(arguments)};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test9.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)