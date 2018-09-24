





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["x","&","f","C","!r","1","oIc!#","#"]
argument2[7] = {"126":"8","1.6950742824730466e+308":9.648122523685835e+307,"J":4.924809617999996e+307,"4.09040852080308e+306":893,"":1.3157686163008465e+308,"3.372616730725976e+307":"b-","ux":783,"1.1950208667199944e+308":"","e":403,"1.2990130922987188e+308":9.384122219458179e+307}
return a/b-c
};
var argument2 = false;
var argument3 = [460,893];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.6798476101238045e+308] = {"783":627,"s":"JOP7;g","":1.551719572757122e+308,"L":4.70351553639883e+306}
base_1[5][1] = null
base_1[1][2] = [893,"u",25,157,-100,655,"#E",122,"j*"]
return a-b*c
};
var argument5 = 823;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = false
return a*b*c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = ""
return a/b/c
};
var argument10 = true;
var base_0 = [242,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,893]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,893]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test708.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)