/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = p2;
var argument4 = "";
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = p2;
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = {"157":25,"242":"n#XY","":"","`":403,"-1":"_","5.559614676056458e+307":122,"5.977287535945514e+307":25,"L<:0":"","&":8.057016917843454e+307,"2.126845538028123e+307":1.6842528471523885e+308};
var argument11 = "E";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test239.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)