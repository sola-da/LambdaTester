





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[5] = {"242":8.361338833605204e+307,"YX)_eh":"%-","&":403,"":1.8230784370745612e+307}
argument3['AO?'] = null
base_0[6] = ["$","NS",893,25]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = ["@","1q@","&","sz"]
argument3[5] = ["^+","9"]
argument3[242] = false
return a-b-c
};
var argument3 = true;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {}
base_2 = [893,783,82,823,0,-1,403,595,627,242]
argument6[4] = {"157":122,"t":""}
return a+b*c
};
var argument6 = "?";
var argument7 = [242,49];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.377960715099946e+307] = true
argument10[1] = {"242":">","1.2924137314825724e+308":"","1.6639080819455538e+307":"","1.336707135107582e+308":618,"2.8115801643121476e+307":403,"":59}
base_3[6] = {"607":"","893":7.147350447499834e+307,"":1.3038083229437703e+308,"7d(k=zv":"W","W":"fQN","3.2970665434425974e+307":"9g2"}
return a+b+c
};
var argument9 = r_2;
var base_0 = [213,783,49,714,655,655,403]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,49,714,655,655,403]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,49,714,655,655,403]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,49,714,655,655,403]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test233.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)