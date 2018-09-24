





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = false;
var argument3 = 1.3087329290702497e+308;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = false;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = null;
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = null;
var argument10 = {"59":3.4082116683154837e+307,"122":"","157":"E&VU","627":2.5248873095117227e+307,"ib":"n)","":8.990881002069011e+307,"1.21047679913154e+308":1.3459434685544234e+308,"3.600774611621207e+307":"0 ","4.551635105147872e+307":""};
var base_0 = [843,460,59,460,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,460,59,460,213]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,460,59,460,213]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,460,59,460,213]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)