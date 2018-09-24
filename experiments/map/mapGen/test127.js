





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = null
argument3[893] = "*"
argument2[82] = [607,1.7976931348623157e+308,783,595,1.7976931348623157e+308,655,403,1.7976931348623157e+308,100]
return a+b*c
};
var argument2 = [607,"y",122,705,-1,"G"];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = 403
return a/b*c
};
var argument5 = null;
var argument6 = 1.7736587469716659e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 1.305711239110217e+308
return a-b-c
};
var argument8 = 82;
var argument9 = "";
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"":"#","LD":1.2706965947076564e+308,"l":1.2563348983511832e+308,"n`":1.3064412294633565e+308,"2.2993967346293704e+306":"P%","1.7124661715463567e+308":607,"-ZI65S":3.7577106625090977e+307}
base_3[0] = 242
argument11[403] = {"0":1.295636352918741e+307,"82":2.979489913535391e+306,"1.333639885890561e+307":9.349315031197061e+307,"-100":7.949587883553371e+306,"3.2977538892914725e+307":"","$YD":655,"":""}
return a+b/c
};
var argument11 = true;
var argument12 = null;
var base_0 = [213,783,126,627,618,403,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,126,627,618,403,242]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)