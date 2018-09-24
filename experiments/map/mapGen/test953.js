





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ["O","am"]
argument2[2][6.452074605254766e+307] = "9"
argument2['C'] = ["se,C:","%","%:"]
return a*b-c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][5] = {"8":9.642977733891336e+307,"213":"po","823":618,"[":1.5173307982081566e+308,"1.7173539292249632e+308":82,"":1.7120040681692367e+308,"7.092005658226656e+306":"","1.031302238815958e+308":"+G","9'Hz']":"gEm%"}
argument5[607] = 607
argument5['AwD'] = 3.140468216606637e+307
return a-b/c
};
var argument5 = {"627":1.211266243825581e+308,"705":618,"1.3363221356333784e+308":"v","1.6912631443132072e+308":"","":1.2598353493423206e+308,"[<^f":"","1.1288833695316898e+307":4.7005339124824e+307," ":783,"0]":1.5807521229396045e+308};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = {}
argument8[1] = ""
return a*b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {"9":"","":"ui","1.1320871696344523e+307":"1<'","3.7816461343216024e+306":49,"a&":"","1.3607241280739928e+308":893,"1.2934469155714522e+308":1.4601688061092394e+308,"1.5314607930185485e+308":9.70369101863636e+307}
return a-b*c
};
var base_0 = [-100,969,460,783,705,607,403,59,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,969,460,783,705,607,403,59,655]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,969,460,783,705,607,403,59,655]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,969,460,783,705,607,403,59,655]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test953.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)