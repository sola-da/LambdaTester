





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = [705,122];
var argument6 = r_0;
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = true;
var argument9 = true;
var argument10 = function callback(){callbackArguments.push(arguments)};
var argument11 = null;
var argument12 = r_0;
var base_0 = [25,655,460,618,0,403,595,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,655,460,618,0,403,595,100]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapEmpty/test312.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)