





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = true;
var argument3 = 1.0877116069311555e+308;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = 213;
var argument6 = 7.994288207702872e+307;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = true;
var argument12 = null;
var base_0 = [460,"w","C",969,969,"W",705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"w","C",969,969,"W",705]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"w","C",969,969,"W",705]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"w","C",969,969,"W",705]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test594.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)