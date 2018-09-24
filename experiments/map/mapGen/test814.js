





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5] = {"0":"","213":"","m":618,"":"x","3<H%":"","1.6849106189908347e+308":"","3.1449749343586393e+307":403}
argument3[0] = {"157":"!","403":705,"595":"","8.677905952433468e+307":"-K3","":"-","N":"","Aq":"","1.0530842199711312e+308":"Lh)","c1":3.7196715699421775e+307,"n!":1.7951058125714194e+308}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][3] = 705
argument3[403] = [823,705,59]
argument3[1.6177106033227046e+308] = {"213":1.679662545931703e+308,"655":"M","N":"","DR":595,"9.763070896739037e+307":"4","1.48989374566486e+308":"","":"vS6(","2.3317351504496513e+307":"","]#":"","1.6249012707150112e+308":"ef"}
return a*b*c
};
var argument3 = [157,783,25,823,82,59,-1,783,627];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['d'] = ""
argument6[403] = ""
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['C'] = true
base_3[6][3] = null
base_3[2] = {"25":"s?9","627":"T","1.023271541956296e+308":"%","1.194006997142449e+308":"","6.160374902832293e+307":"P"}
return a+b+c
};
var argument6 = "5";
var argument7 = null;
var base_0 = ["n","f","U","Vz","v"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n","f","U","Vz","v"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n","f","U","Vz","v"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n","f","U","Vz","v"]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test814.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)