/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 893;
var argument3 = false;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = p2;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"100":"IOncn","893":"","":"","v":""};
var argument8 = r_1;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = r_2;
var argument11 = {"403":"","":59,"4.571770232811845e+307":4.807339303602806e+307,"1.396236434385929e+308":9.65089139028383e+307,"5.455505526598058e+307":1.7976931348623157e+308,"6.813073890194126e+307":242,"8.361338833605204e+307":"YX)_eh","%-":"&","1.8230784370745612e+307":1.7976931348623157e+308};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
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
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test847.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)