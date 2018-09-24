





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 59
base_0['length'] = 8.518394394524612e+307
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['5L'] = ["f","1tS","(","N","QD","32h"]
argument4[1] = ""
argument4[4] = ["UT","3","KZ<","L","%"]
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ["i","*","o","J",-100,"#}%E","^"]
base_2[3][6] = 1.0518948031435734e+308
base_2 = ["9",82,",}","L",607,607]
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"0":5e-324,"O4M":59,"1.1733121407844689e+308":"y","":6.884508872484048e+307,"2.7564765257967287e+306":"I !FAh","7.59752212102482e+306":2.932991325475813e+307,"c":9.037942292656302e+307,"e4m;i]!":1.668567162344187e+307}
argument5['f9zgt4n!ZJR]W'] = null
base_3[4][8] = 969
return a/b-c
};
var argument5 = "$";
var base_0 = [714,126]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,126]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,126]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,126]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test499.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)