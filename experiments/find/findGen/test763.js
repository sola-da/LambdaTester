





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['LK'] = true
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = true
argument4['!j'] = {"126":82,"5.705922235444635e+307":"","":8.712880867832713e+307,"5FmDK":"","-100":"","1.7976931348623157e+308":"w@","Vz":0}
base_1 = 4.767368250670922e+307
return a+b-c
};
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['!j'] = {"25":2.7778745738796e+307,"126":"o","l-qs=^Ii<":"LWI%'","1.268696794505825e+308":0,"":"=","-100":"","8.809209773029947e+307":969,"iq":8.46868948253437e+307}
argument7[969] = [655,627,823,0,126]
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = null
base_3[5] = null
argument6[3.377960715099946e+307] = false
return a/b-c
};
var base_0 = [49,595,969,460,714,-100,607,893,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,595,969,460,714,-100,607,893,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,595,969,460,714,-100,607,893,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,595,969,460,714,-100,607,893,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)