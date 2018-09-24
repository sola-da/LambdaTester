





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
base_0[0][6] = false
argument3['V'] = 1.4772048203783398e+308
return a/b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 5.540231844343549e+307
argument4['j'] = null
argument4[607] = ["@9","w",82,242,157,"@(I"]
return a*b/c
};
var argument4 = [126,627,82];
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7] = {"126":"i0-#Y8","607":"","":460,"_V":9.183547625989933e+307}
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = {"9":"","122":893,"157":"jT","969":"kd","":969,"1.1545421247523314e+308":"Y","3.4469039774220863e+307":"?q("}
argument7[4] = null
return a/b/c
};
var argument8 = false;
var argument9 = null;
var base_0 = ["N:D","EE","4","r","&Bl","&","nu"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N:D","EE","4","r","&Bl","&","nu"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N:D","EE","4","r","&Bl","&","nu"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N:D","EE","4","r","&Bl","&","nu"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)