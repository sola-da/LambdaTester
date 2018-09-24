





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['['] = ["Jp","]","8B>","q","]","O"]
argument1[4] = null
argument1[3.377960715099946e+307] = {"":0,"6.749972280484372e+307":893}
return a+b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[49] = [627,460,122,783]
base_1[1][1] = ["7l","G"]
return a+b/c
};
var argument4 = false;
var argument5 = [213];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0500354979187844e+308] = {"607":":Z","TU":"["}
argument7[2] = {"893":"","1.2546930673736466e+308":893,"j":"v","7.868310828988e+307":"%5","Ty[:":3.325387728080952e+307,"":1.1933502698741333e+308,"1.1607782560413724e+308":0,"|":"2M"}
return a-b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"25":969,"100":"L<","823":"KJe}h1","6.935905798110356e+307":5e-324,"5e-324":783,"3.477568719394789e+307":1.216270866122463e+308,"8.686461305666127e+307":607,"s;":"p","4.745089060113269e+307":""}
return a-b+c
};
var argument8 = r_2;
var argument9 = null;
var base_0 = [705,122,705,403,25,82,607]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,122,705,403,25,82,607]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,122,705,403,25,82,607]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,122,705,403,25,82,607]
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
require("fs").writeFileSync("./experiments/find/findGen/test998.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)