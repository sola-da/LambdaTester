/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument2 = {"403":9.031306469414775e+307,"1.9743863846554472e+307":9.169838154743156e+307,"1.3901220964528589e+308":25,"1.571052555549415e+308":1.1645602152122944e+308,"s@":783,"":618,"5.727395412153241e+307":"","6.265309145796475e+307":1.8070569095600382e+307};
var argument3 = null;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument8 = false;
var argument9 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument10 = 9.644084301966305e+307;
var argument11 = r_1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test641.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)