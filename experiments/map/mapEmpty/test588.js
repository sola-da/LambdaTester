





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = [49,157,213,59,126,655,25,969];
var argument3 = function callback(){callbackArguments.push(arguments)};
var argument4 = null;
var argument5 = function callback(){callbackArguments.push(arguments)};
var argument6 = true;
var argument7 = {"100":6.714342175168815e+307,"1.1747662830077309e+308":1.7009349548149635e+308,"":5.362990998961199e+307,"]n":"","1.7976931348623157e+308":""};
var argument8 = function callback(){callbackArguments.push(arguments)};
var argument9 = r_2;
var argument10 = {"5":705,"213":"","607":1.3834941135400396e+308,"627":1.1851186141656086e+308,"823":"","1.2551239020462008e+308":705,"!":122,"":"","t":""};
var base_0 = ["t","O`]7",";","Zi]","04Q<"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapEmpty/test588.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)