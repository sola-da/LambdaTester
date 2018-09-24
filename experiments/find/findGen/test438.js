





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = null
base_0[1] = true
argument3[2] = {"25":"o","460":7.287745161047271e+307,"1.7976931348623157e+308":969,"":3.0061980999903417e+307,"ap":0,"1.0621389860002568e+308":157,"5.681901281774796e+307":1.0182273387205832e+308}
return a/b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = null
base_1[6][4] = {"242":1.1735955524648516e+308,"969":25,"":59,"-":0,"1.0109477650652087e+308":"s","1.434619718966593e+308":4.780896853849786e+307,"1.9091202090498624e+307":1.3849734286457885e+308,"1.7095574757879673e+308":1.1017640630314839e+308}
base_1[7] = null
return a*b*c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = ["=","#pe","gdi8;$","r"]
base_2[0][6] = null
return a-b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['^h'] = null
return a*b/c
};
var argument9 = true;
var base_0 = ["x","]T",";"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x","]T",";"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x","]T",";"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x","]T",";"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)