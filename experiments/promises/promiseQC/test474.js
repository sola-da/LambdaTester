/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument3 = {"157":"i","###":"","":"Z","f":2.775924834628594e+307,"4.403952196911522e+307":"","5e-324":5.534211203821633e+307,"3.338194000174974e+306":1.3882446373903214e+308};
var argument4 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument5 = true;
var argument6 = {"25":9.386985922411962e+307,"100":"'J:F","460":705,"627":1.1051480830196983e+308,"893":"J","Z":"","1.0164949085826488e+308":126};
var argument7 = function() {
callbackArguments.push(arguments)
 return 42; }
;
var argument8 = false;
var argument9 = function() {
callbackArguments.push(arguments)
 return 69.13238586626966; }
;
var argument10 = false;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test474.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)