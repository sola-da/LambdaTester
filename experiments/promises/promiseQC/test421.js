/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument2 = 1.4168591518436653e+308;
var argument3 = null;
var argument4 = [157,82,242,"9H","k,",705,"r+^"];
var argument5 = function() {
callbackArguments.push(arguments)
 return 
"\u0002î´Ê\u001d§\u0005":-0.5356193110610861,"ÂV¬c\u0007":0,"ú½.±4x:¾":-6,"ÆûrÕÌ J\tvN":-6,"P³ä\u001a§òíÜ^":-23}; }
;
var argument6 = {"969":122,"1.7737836379221011e+307":"Ng","7.232930364299541e+307":"|tD"};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)