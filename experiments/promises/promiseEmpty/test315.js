/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"0":"J","122":59,"irL#":627,"9.035713855563055e+307":5.474784835080495e+307};
var argument6 = [460,49,460,969];
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = [714,893,627,"A"];
var argument11 = {"49":"","714":"Bm;","":"","1.588889527453394e+308":"","7.564969788718492e+307":9.58973355070946e+307,"Z>L":"","-100":"Y>yPr[","2.551163782560422e+307":"","O9'r":7.926412479491489e+307};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test315.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)