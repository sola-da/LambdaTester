





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = {"783":"X1d","6.387721908868171e+307":1.4819558762392014e+308,"1.3975460493543956e+308":""}
argument3[4] = null
base_0[6] = 1.0433489011659433e+307
return a+b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = null
base_1[1][2] = true
base_1[7] = 403
return a/b/c
};
var argument4 = null;
var argument5 = 1.7736587469716659e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 1.305711239110217e+308
return a-b-c
};
var argument7 = 82;
var argument8 = "";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"":"#","LD":1.2706965947076564e+308,"l":1.2563348983511832e+308,"n`":1.3064412294633565e+308,"2.2993967346293704e+306":"P%","1.7124661715463567e+308":607,"-ZI65S":3.7577106625090977e+307}
base_3[9] = 242
base_3[1][1] = {"0":1.295636352918741e+307,"82":2.979489913535391e+306,"1.333639885890561e+307":9.349315031197061e+307,"-100":7.949587883553371e+306,"3.2977538892914725e+307":"","$YD":655,"":""}
return a+b/c
};
var argument10 = true;
var argument11 = null;
var base_0 = ["`Oug","D",")NJ",":}","w","F","rJ["]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`Oug","D",")NJ",":}","w","F","rJ["]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`Oug","D",")NJ",":}","w","F","rJ["]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`Oug","D",")NJ",":}","w","F","rJ["]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)