





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "";
var argument3 = {"595":213,"=":82,"":"","_{":"%","C":1.7308797629939978e+308};
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = false;
var argument6 = {"{":8.5860264625786e+307,"":"b","4.509806859314638e+307":8.366201410510544e+307};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = [-1,"`h[","*","V",157,"*","j",0,595];
var argument9 = [403,0,"d)",1.7976931348623157e+308,49,"j",";Y","aA"];
var argument10 = function callback(){callbackArguments.push(arguments)};
var base_0 = [607]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test941.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)