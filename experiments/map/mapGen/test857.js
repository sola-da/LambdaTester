





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9.869573703797622e+307] = null
base_0[2][5] = 4.635063156815105e+307
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[607] = [843]
base_1['length'] = ""
argument4[893] = false
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = 122
base_2[3][4] = {"893":7.182791666948736e+307,"":"","2.4309475713051575e+307":"","4.627478754706982e+307":893,"1.1871328222947775e+307":"","{(":9.384577102165186e+307}
return a/b-c
};
var argument4 = r_2;
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = 1.4099632095064528e+308
base_3[0] = 1.1742517107675276e+308
base_3[3] = {"122":"I","618":783,"783":"Q)L","969":100,"":"Ckat&","7.247958284474968e+307":1.2988714868058206e+308,"1.7961970684131151e+308":4.700396138118237e+307,"6.439434554408713e+307":"v"}
return a+b+c
};
var argument7 = r_1;
var argument8 = r_0;
var base_0 = [893,"a})4",157,"K",25,"YcR3O","k",-100,893,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"a})4",157,"K",25,"YcR3O","k",-100,893,783]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"a})4",157,"K",25,"YcR3O","k",-100,893,783]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"a})4",157,"K",25,"YcR3O","k",-100,893,783]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test857.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)