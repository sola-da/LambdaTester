





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = "[";
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = null;
var argument5 = 1.102377050760547e+308;
var argument6 = function callback(){callbackArguments.push(arguments)};
var argument7 = r_0;
var argument8 = true;
var argument9 = function callback(){callbackArguments.push(arguments)};
var argument10 = null;
var argument11 = {"100":1.2204409718012848e+308,"126":"@4X","157":157,"714":"","969":1.6523855654197865e+308,"q0":"","":1.3491157320744734e+308,"6.823935105045055e+307":"","1.672786168326013e+308":""};
var base_0 = ["hN","M","Q:","w",">","DU$","9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hN","M","Q:","w",">","DU$","9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hN","M","Q:","w",">","DU$","9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hN","M","Q:","w",">","DU$","9"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachEmpty/test791.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)