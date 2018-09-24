/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [157,823];
var argument2 = function() {
callbackArguments.push(arguments)
 return -43; }
;
var argument3 = p1;
var argument4 = function() {
callbackArguments.push(arguments)
 return 
",Ê\u0010ëD\r\u0016\u001f":-0.07617595758561513,"J¤\"\u001e\u0000^F,¦":0.8342332795575447,"":false}; }
;
var argument5 = null;
var argument6 = ["L5","nx","%","-","m","ukww|"];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)