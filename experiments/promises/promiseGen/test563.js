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
var argument2 = ["]","iF","Q","F",";","8"];
var argument3 = null;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument5 = [-1,969,-1,618,618];
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument7 = {"82":"VrI8","714":1.3292109974834713e+308,"(64":"ee{","":"","1.200738845677737e+307":"","W":"8","m":823,"1.2524655804668683e+308":3.165968751455544e+307,"$R1T":")"};
var argument8 = p1;
var argument9 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var base_0 = p2
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
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test563.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)