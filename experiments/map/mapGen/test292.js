





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = ""
argument3 = ["K3","z;b","6","P","^"]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['C'] = {}
argument4[0] = {"0":"4","8":"s","242":6.140910689895567e+307,"783":"Q","Iq$E":"","9i,G`xV":"`","R":"m","w":"hs[","":6.760515685248437e+307,"1.0689775630670688e+308":"!"}
base_1[0] = [242,714,1.7976931348623157e+308]
return a+b/c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument7[714] = null
return a+b*c
};
var argument6 = null;
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['3Tpj5'] = {"126":"1","969":"","":9.857748336443737e+307,")":213,"g":""}
base_3[2] = {"0":100,"":"","3.003303996301476e+307":7.995285733345337e+307,"6.734809290859912e+307":627,"Pi":"!(","1.1863434190231078e+308":969,"1.5995292149482602e+308":"n}","Hi":893,"1.0899125902913378e+308":1.232591035348619e+308}
return a*b/c
};
var base_0 = [627,893,618,82,403,157,59,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,893,618,82,403,157,59,893]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,893,618,82,403,157,59,893]
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
require("fs").writeFileSync("./experiments/map/mapGen/test292.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)