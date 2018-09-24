/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = {"783":">`5[p","":1.0348589588018163e+308,"7.695789183619612e+306":4.7160410433927986e+306,"zN":1.0565163036378833e+308,"1.240136205464858e+308":"","2.7498982794875246e+307":1.686864332832295e+308};
var argument4 = "";
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = "?";
var argument7 = [0,705,655,705];
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = [100,607,213,0,157,607,100,893];
var argument10 = function callback(){callbackArguments.push(arguments)};
var base_0 = p1
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)