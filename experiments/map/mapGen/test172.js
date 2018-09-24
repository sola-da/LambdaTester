





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = null
base_0[0][1.4677087964888306e+308] = null
return a-b*c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = 122
return a+b/c
};
var argument5 = {"618":"H|","893":"","%|":8.849152746822866e+307,"1.02312660895403e+308":"l7","V(":"c","3.5492707584077094e+307":"","":"<","S`":1.4613961919806077e+308};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = false
argument7[82] = {"3.4305557015014304e+307":122,"1.4015100035704772e+308":122,"6.269954167190474e+307":25,"9.100015555153735e+307":"L","1.7976931348623157e+308":1.7976931348623157e+308,"8.463103674713091e+307":1.4077452281865594e+308,"2.425901907890853e+307":"?p+","i6":"Hsbs"}
argument6[3] = {"570":823,"":"([+","f":"F","1.3559784896714044e+308":""}
return a+b+c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = null
argument8[3] = "6Oq"
base_3[7][2] = {"":157,"8.879933052947266e+306":"","4.139074670300756e+307":""}
return a*b+c
};
var base_0 = [157,783,627,157,843,-1,823,157,783,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,783,627,157,843,-1,823,157,783,126]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapGen/test172.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)