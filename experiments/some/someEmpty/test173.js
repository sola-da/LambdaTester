





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = 7.819151230564371e+307;
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = [-100];
var argument5 = true;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = {"157":"","893":"ky","4.131138570478191e+307":"","-100":595,"":9.981122214369923e+307,"L":2.7292855913263713e+307,"$m":"Q"};
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = null;
var argument10 = r_2;
var base_0 = ["J7-","(o","s",705,607,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J7-","(o","s",705,607,893]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J7-","(o","s",705,607,893]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J7-","(o","s",705,607,893]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someEmpty/test173.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)