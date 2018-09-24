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
var argument2 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return p2
};
var argument3 = false;
var argument4 = {"607":"","618":1.7415931282543334e+308,"":"8L","G)w*e":1.3023865356589834e+308,"2.565620433631354e+307":82,"3.9054150212666927e+307":1.310791514206938e+307,"1.2168050379434671e+308":1.7005002865826185e+308,"N":"C","c-":1.8306857894324325e+307,"3.398723814623943e+307":"+"};
var argument5 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument6 = p2;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return true
};
var argument8 = null;
var argument9 = p2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test536.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)