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
var argument2 = {"25":"","59":"","607":823,"Dlbb":4.797078780672375e+307,"8.925090471369404e+307":1.6753396615867485e+308,"":"]*1'a","9.62617508552278e+307":1.715428662376767e+308,"1.7976931348623157e+308":"8(","-1":1.448283032768923e+307,"1.671259945975452e+307":1.0209502036371767e+308};
var argument3 = null;
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument6 = r_2;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument8 = "r_3";
var argument9 = {"82":"","595":"","s":1.3049539094462105e+308};
var base_0 = p2
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
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test284.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)