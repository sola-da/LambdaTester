





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 25
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['7q('] = ["{","0No","BE2","6","ex","N",1.7976931348623157e+308]
base_1[6] = {"0":1.7778825286079422e+308,"126":-100,"607":"$;@","618":2.8639285498741147e+307,"893":"bD%","":"YW","9.48055167368961e+305":"","1.7302276141749813e+308":""}
argument3[3.0481490052276395e+306] = false
return a+b-c
};
var argument3 = ["!en",595,607,618,714,460,783,403,25];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4570946481947045e+308] = false
argument5['-'] = [618,213,705,655,893,969,82,213,655]
return a+b/c
};
var argument5 = {"8":1.2475017373481819e+308,"714":"w!","823":"JU","893":1.7976931348623157e+308,"9.3239804201245e+307":":","a":9.358262560578998e+307,"y":"","":2.0094679955360397e+307,"i":893};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
argument7[3.0481490052276395e+306] = 595
return a+b*c
};
var base_0 = ["s","O4","C",59,"LD{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s","O4","C",59,"LD{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s","O4","C",59,"LD{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s","O4","C",59,"LD{"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test977.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)