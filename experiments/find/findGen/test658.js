





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = 1.7816714595121455e+308
base_0[7] = ""
return a-b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = ""
argument4[3.7668525981726295e+307] = null
return a+b*c
};
var argument4 = [49,"E",655,"DGg;k",714];
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['LK'] = [969,595,823]
argument7[0] = {"25":"m","49":6.32061962197194e+307,"714":2.084147905666802e+307,"8.163851668820137e+307":"Q","":627,"!":"","-1":627,"**p%":"WO","8.324225060469998e+307":403}
argument8[969] = true
return a/b-c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[242] = {"25":"","Gq":25,"":"mY","n":595,"aA":"sq"}
argument9[705] = {"9.592526792849066e+307":1.067116788325705e+308,"d":7.514544561367426e+307,"7.629255708966234e+307":">;"}
return a+b*c
};
var argument9 = ["O","We%","a","<iV&L=","sG","I","|"];
var argument10 = r_1;
var base_0 = ["q",823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q",823]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q",823]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q",823]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test658.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)