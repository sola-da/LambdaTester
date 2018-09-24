





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3.5329845145600404e+307] = {"823":"v{","2.2917861012484026e+306":"$","":"","4.495942597946172e+307":157,"1.6701656559056523e+308":"","5>":969,"5.401539140066686e+307":""}
argument3[705] = {"4.639159813569883e+307":"km",">":627,"rx":6.058489108438137e+307,"a":""}
return a/b+c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[-1] = 122
base_1[1] = null
return a/b*c
};
var argument5 = ["s6","X","g","Yc","(@Jf","QD",":","s","T"];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"9.876075690236485e+307":4.4890356719312553e+307,"4.572905419690382e+307":"C","1.1407969290434144e+308":595,"1.6710821081791556e+308":"GE[","4.1296872324040443e+307":3.2670507062864576e+307,"":"L","[":")O","1.7842469391381524e+308":""}
base_2[1] = "R"
base_2[8] = [49,823,783,25,-1,460,607,969]
return a/b/c
};
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = null
return a-b+c
};
var argument10 = null;
var argument11 = {"0":"})","460":"","714":"","783":242,"1.1547631657525749e+308":82,"":"","yK":893,"-100":"","1.7348060980845463e+308":0,"1.2314794363761327e+308":""};
var base_0 = [843,460,627,403,595,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,460,627,403,595,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,460,627,403,595,627]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test949.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)