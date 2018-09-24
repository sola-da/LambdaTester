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
var argument2 = true;
var argument3 = [-1,618,213,25,705,627,893,705];
var argument4 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
var argument5 = {"59":7.706012989805612e+306,"403":"","655":25,"783":969,"969":242,"1.443288977890246e+308":"","1.3117665378048143e+308":823,"":"","1.7119090298303884e+308":705,"__f)":122};
var argument6 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return false
};
var argument7 = p2;
var argument8 = null;
var argument9 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p1
};
var argument10 = false;
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
r_1 = base_1.catch(argument4,argument5)
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
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test179.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)