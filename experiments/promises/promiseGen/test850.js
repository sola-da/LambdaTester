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
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument3 = true;
var argument4 = p1;
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument6 = 1.049426270809725e+308;
var argument7 = p1;
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_2
};
var argument9 = {"82":"w","122":6.380957859177959e+307,"618":"f","705":"","-100":9.389532628111172e+307,"T":1.316157878652434e+307,"":"8","1.0047204202530798e+308":"","1.085417142913377e+307":1.3279326546870789e+308};
var argument10 = {"460":"","607":969,"783":1.5904011878877677e+308,"g,":1.565375098654375e+308,"":"1",":":1.7485161608100604e+308,"1.0905873973647146e+308":"R","1.2327534357635355e+308":1.1073416810345524e+308,"_IQ8":100};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)