/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument2 = false;
var argument3 = p2;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument5 = r_1;
var argument6 = 82;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument8 = r_1;
var argument9 = {"":403,"+Ft-d":1.208405733928313e+308,"1.7284389229217968e+308":607};
var argument10 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_0
};
var argument11 = {"":")","sl4ma":""};
var argument12 = p2;
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test391.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)