





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[969] = [607,213]
argument2['D'] = {"460":"","893":"&"}
return a*b+c
};
var argument2 = r_0;
var argument3 = ["=",893,"v","Y",1.7976931348623157e+308,823,")"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['VsR'] = {"49":"","":25}
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = "u"
argument6[6] = {"403":"H","627":5e-324,"893":"E$u<(Gb","1.3708202792119103e+308":49,"<":"","":"&","o(t":"","X4":"lYM","1.1594090026378257e+308":"?9^>"}
base_2[0][823] = [122,893,655]
return a*b*c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.268696794505825e+308] = {"1.7717211496987762e+308":59,"1.0332252366364207e+308":"NS","":""}
return a/b*c
};
var argument8 = "";
var argument9 = [705,627,82,213,0];
var base_0 = ["J;","F{;_0w","T","XqZ","}(","]","YzseMT","dTL"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J;","F{;_0w","T","XqZ","}(","]","YzseMT","dTL"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J;","F{;_0w","T","XqZ","}(","]","YzseMT","dTL"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J;","F{;_0w","T","XqZ","}(","]","YzseMT","dTL"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test935.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)