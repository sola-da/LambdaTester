





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = ["7",49,"v","eR","9","dqY","c","?e","]d"];
var argument6 = [-1,157,126,25,-1,59];
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = false;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = 1.0289409179664878e+308;
var base_0 = ["zX","$i","^YH(","5E"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["zX","$i","^YH(","5E"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["zX","$i","^YH(","5E"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["zX","$i","^YH(","5E"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test526.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)