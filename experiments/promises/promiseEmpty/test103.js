/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = p2;
var argument3 = 213;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {":[":969,"9.908289520587372e+307":5e-324,"":1.329788913474809e+308,"Y$RjO;":82,"1e":1.0400658109989964e+308,"7.646082706400073e+307":783,"dWe":1.3959017042697757e+308,"4.9768397522802e+307":-1};
var argument6 = true;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = 3.009898029835465e+307;
var argument9 = true;
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = null;
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test103.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)