





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][3] = null
argument3[893] = "v"
argument2['f'] = 1.7976931348623157e+308
return a-b/c
};
var argument2 = true;
var argument3 = ["H","nXT"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = null
argument6[0] = 3.4322618435052403e+307
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b-c
};
var argument6 = null;
var argument7 = [157,460];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2][6] = 242
argument9[607] = {"213":4.3869324097781565e+306,"":1.7976931348623157e+308}
return a+b/c
};
var base_0 = [893,1.7976931348623157e+308,"r","@",607,"6",122,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,1.7976931348623157e+308,"r","@",607,"6",122,627]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,1.7976931348623157e+308,"r","@",607,"6",122,627]
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
require("fs").writeFileSync("./experiments/map/mapGen/test792.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)