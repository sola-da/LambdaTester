/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 1.3941286430664613e+308;
var argument3 = "$";
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"82":"","595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"4Zp":627,"":1.2833910079036087e+308,"1.2348338590731009e+308":"","q":705,"1.4436136186439628e+308":9.471574687627239e+305,"2.419328363222315e+307":";"};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = ",I,";
var argument8 = [595,242,"*","60,1",100,5e-324,";",242,1.7976931348623157e+308,823];
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = "r_3";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test116.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)