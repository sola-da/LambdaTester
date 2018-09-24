





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = null
base_0[4][7] = 1.6566798943420108e+308
base_0[0] = false
return a/b-c
};
var argument2 = {"403":"","607":"","655":893,"893":1.5929381570285098e+308,"3.012078760003689e+306":"V","":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = ""
argument4[9] = ""
argument5['T'] = 1.1918345294405226e+308
return a+b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2.249941463060761e+307] = [705,607,25,618]
argument6[1.6798476101238045e+308] = ""
argument6['5L'] = {"126":893,"":""}
return a+b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 100
argument7[1.6798476101238045e+308] = "[A"
argument8['T'] = null
return a-b/c
};
var argument7 = null;
var base_0 = ["pMO|YTL","6s?","p6)g","w",")",",","O","#","kT","x"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["pMO|YTL","6s?","p6)g","w",")",",","O","#","kT","x"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pMO|YTL","6s?","p6)g","w",")",",","O","#","kT","x"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["pMO|YTL","6s?","p6)g","w",")",",","O","#","kT","x"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test227.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)