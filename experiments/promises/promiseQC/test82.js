/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return "dSº"; }
;
var argument2 = function() {
callbackArguments.push(arguments)
 return 73; }
;
var argument3 = r_1;
var argument4 = [25,82];
var argument5 = function() {
callbackArguments.push(arguments)
 return [false,null,-1,-8.354621309129323,
"Ò":true,"è\u0018":"ç","±\u0000":[]},true]; }
;
var argument6 = {"0":"O","49":100,"1.7488727816149656e+308":"","":607,"2.6018759273943807e+307":"","ux7gs":"Z'","1.4458149235295055e+306":"]zNq&)q","1.6930769630115494e+308":49,"q":1.0500354979187844e+308,"{:":"O"};
var argument7 = r_1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)