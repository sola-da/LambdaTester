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
var argument2 = null;
var argument3 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument4 = [705,-1,783,893,460];
var argument5 = {"0":1.2728969013871833e+308,"460":1.7061364217676174e+308,"705":4.818095222587679e+307,"783":49,"4.710917414662172e+307":242,"1.3435829872183634e+308":"p ","AA@":"","L&":""};
var argument6 = null;
var argument7 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return null
};
var argument8 = function callback(){
callbackArguments.push(JSON.stringify(arguments))
return r_1
};
var argument9 = {"122":607,"242":3.1055033379361567e+307,"3.36094817883209e+306":9.474744550976556e+307,"":4.790648800941336e+307};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseGen/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)