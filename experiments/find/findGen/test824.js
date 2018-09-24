





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"213":"","1.2161717678201955e+308":2.0928851846317986e+307,"":7.559566533382003e+307,"'":25,"p":5.497514877795282e+307,"1.7976931348623157e+308":1.1589979347167729e+308}
base_0[0][0] = null
base_0[3] = true
return a-b/c
};
var argument2 = 49;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[242] = [705,714,893,-100,618,595,403,618]
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0500354979187844e+308] = true
argument5 = null
argument5[705] = "1"
return a*b-c
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6.949630915607762e+307] = {"607":"","1.4261263031683199e+308":"","d":"Gx-=","F96":126,"E":"",",E":"","4.0440849398963126e+307":1.3242562162269687e+308,"":"Mj","9.931695065523324e+307":""}
return a+b+c
};
var argument8 = true;
var argument9 = true;
var base_0 = [714,705,618,783,607,714,403,969]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,705,618,783,607,714,403,969]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,705,618,783,607,714,403,969]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,705,618,783,607,714,403,969]
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
require("fs").writeFileSync("./experiments/find/findGen/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)