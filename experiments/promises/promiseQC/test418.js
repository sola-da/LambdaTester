/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument2 = null;
var argument3 = function() {
callbackArguments.push(arguments)
 return 
"Ä*":false,"pkÆº©ê":0.6786919843376067,"1»o\u0018&[":true,"á":5,"
E":"WÎÁñ","?Kvê°Z5l":-15,"ºML,":"a¹y!","ÆA":-27.412018605884725,"ûç;¤\t>3":[-0.37183562607955234,"ï"]}; }
;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3)
}
catch(e) {
r_1= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test418.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)