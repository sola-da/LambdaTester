





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = r_1;
var argument5 = {"59":1.515150649380959e+308,"":"M0","1.1596322454353835e+308":1.318080797077948e+308,"1.7970189351845126e+308":7.303201808839228e+307,"1.4279613862868489e+308":2.7608538342741447e+307};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = null;
var base_0 = ["_","waQH","xc-o","2`","u","X","&"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_","waQH","xc-o","2`","u","X","&"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_","waQH","xc-o","2`","u","X","&"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_","waQH","xc-o","2`","u","X","&"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test925.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)