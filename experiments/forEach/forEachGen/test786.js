





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[7.92397107964922e+307] = ""
argument2[3.0481490052276395e+306] = true
argument2[7] = false
return a+b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][8.05235215815219e+307] = 9.250681957234547e+307
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['am'] = ""
base_2[2][8.05235215815219e+307] = null
base_2[7] = null
return a*b+c
};
var argument5 = {};
var argument6 = [-1,242,607,100,783,49,627,82];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.0446313380579697e+308] = null
argument8[1.268696794505825e+308] = true
argument9[7] = {"":1.200030503210087e+308}
return a/b/c
};
var argument8 = true;
var argument9 = {"25":705,"":"","1.7976931348623157e+308":"*","6.409501193209735e+307":213,"1.1419424153903228e+308":"","4.1363472574202606e+307":1.4827179202663585e+307,"1.3941650198920235e+308":1.3880974201329266e+308};
var base_0 = [843,893,607,893,595,5e-324,-1,59,714,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,893,607,893,595,5e-324,-1,59,714,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,893,607,893,595,5e-324,-1,59,714,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,893,607,893,595,5e-324,-1,59,714,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test786.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)