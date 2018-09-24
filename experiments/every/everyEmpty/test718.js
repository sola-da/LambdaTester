





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 1.5960525826387235e+307;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = false;
var argument8 = null;
var argument9 = function callback(){callbackArguments.push(arguments)};
var base_0 = [-1,-1,618,893,595,1.7976931348623157e+308,122,-1,100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,-1,618,893,595,1.7976931348623157e+308,122,-1,100]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,-1,618,893,595,1.7976931348623157e+308,122,-1,100]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,-1,618,893,595,1.7976931348623157e+308,122,-1,100]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyEmpty/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)