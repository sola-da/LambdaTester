/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return "MD/v§\u001esU"; }
;
var argument2 = {"49":1.6103665787765955e+308,"82":9.978035284290205e+307,"607":1.1400781839560427e+308,"843":9.029776082761639e+307,"9.400181569736919e+307":">XHm1","1.0149538323736175e+308":-100,"":"","1.243446698529588e+308":4.456251793057931e+307,"1.094161159624227e+307":49,"3.882909720579613e+306":783};
var argument3 = {"3":1.1465490919089324e+308,"2.320353221901601e+307":-1};
var argument4 = function() {
callbackArguments.push(arguments)
 return "P#"; }
;
var argument5 = p2;
var argument6 = function() {
callbackArguments.push(arguments)
 return true; }
;
var argument7 = function() {
callbackArguments.push(arguments)
 return undefined; }
;
var argument8 = {"-100":"","w^":213,"7.034215566731081e+307":"","1.0555583009664232e+307":1.6122823333188358e+308,"g":"K","":"%","1.6032298315810952e+308":"Y"};
var argument9 = false;
var base_0 = p2
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
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test711.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)