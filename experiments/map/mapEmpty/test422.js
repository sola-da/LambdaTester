





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = null;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = {"403":59,"":"|","1.5718461745617677e+308":607,"3.920585024533693e+307":"T9","S":403,"8.258285429405853e+307":242,"6.212477823489754e+307":"-&","U3":"","1.703102139996846e+308":"","1.1689206600940957e+308":823};
var argument5 = [783,403,823,"`6"];
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = r_2;
var argument8 = "1";
var argument9 = function callback(){callbackArguments.push(arguments)};
var base_0 = [122,59,618,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,59,618,714]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapEmpty/test422.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)