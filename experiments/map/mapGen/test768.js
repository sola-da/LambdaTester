





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5] = 1.3410562107995168e+308
argument2[0] = "7"
argument3[8] = {"157":0,"823":"","893":1.1912770837537691e+308,"5.119363579392576e+307":1.611608535938671e+308," e":"","":49,"8.778364932994004e+307":"","1.2592705175795381e+308":1.6410468137656976e+308,"8.132164080002936e+307":"sm"}
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['3Tpj5'] = [25,823,25,893]
argument4[607] = 783
base_1[3][2] = false
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['A'] = ""
return a/b*c
};
var argument4 = true;
var argument5 = ["**","zezP","Ri`","zv","o","6"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['f'] = [49,655,893,843,969,618]
base_3[2]['f'] = false
base_3[3][2] = 893
return a/b+c
};
var argument7 = true;
var base_0 = [843,893,-1,157,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,893,-1,157,0]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,893,-1,157,0]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,893,-1,157,0]
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
require("fs").writeFileSync("./experiments/map/mapGen/test768.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)