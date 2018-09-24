





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = false;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = {"3":"V`h*4D","7.998594720903437e+307":3.718091250218697e+306,"':l":"i","js":"9","7GF%":1.605412757276924e+308,"T":82,"":5.764489555008803e+307,"1.795042430955286e+308":"","X":607};
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = [1.7976931348623157e+308,783,242,969,49,5e-324,893];
var base_0 = [126,714,"<{sP","N","B"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,714,"<{sP","N","B"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,714,"<{sP","N","B"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,714,"<{sP","N","B"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapEmpty/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)