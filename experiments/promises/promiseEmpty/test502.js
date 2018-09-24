/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = {"p":"","1.545788079285053e+308":"","3.289307266532534e+307":"Y>P","6.735273359514958e+307":460,"":157,"#FAl":-1};
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = "zsOwMuo";
var argument6 = {"8.690102834923551e+307":1.3893267740547613e+308,"":"Q"};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = {"157":"G","823":6.415799832835954e+307,"7.877436048858205e+307":1.5581547027328272e+308,"9.85940802023135e+307":126,"i95":"S+p","Apo":9.051335159139241e+307,"K":5.094771876806349e+307,"-1":460,"1.7225810522066861e+308":"","TD":"n"};
var argument9 = r_2;
var argument10 = function callback(){callbackArguments.push(arguments)};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
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
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/promises/promiseEmpty/test502.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)