





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = 1.5182543463363299e+308;
var argument6 = null;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = null;
var base_0 = ["`#(-L4","V","Aky<s","TZ","N","I^gn","R","_n","eg"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`#(-L4","V","Aky<s","TZ","N","I^gn","R","_n","eg"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapEmpty/test788.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)