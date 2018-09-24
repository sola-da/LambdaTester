





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"242":823,"2.804265737191254e+307":"59","5.162114455244765e+307":5.606983361578471e+307,"I#":1.3668538126991564e+308,"|>9yj":"","k":""}
argument2[1.1881593224845412e+308] = 627
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9.869573703797622e+307] = false
base_1['length'] = ["9Hn",126,49,627,100]
return a/b/c
};
var argument3 = null;
var argument4 = {"1.740479436470555e+308":157,"1G;69)(":")","PY([d$":1.4921332470824259e+308,"T>xD(#":1.7339541180951834e+308,"":"","m!":"","7.673079012751406e+307":""};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = null
argument6['C'] = {"8":893,"893":"bB","MOd":122,"lcI8v":5.090087183182486e+307,"":"","1.4679145475746063e+308":"","^Z":"V","Js":1.6114718880347105e+308,"T*m":"k","6.512571464391432e+307":2.8541071933069813e+307}
argument6[3] = ""
return a-b*c
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = ["h","S`","M","("]
base_3[5][2] = ""
argument10[607] = null
return a-b+c
};
var argument9 = r_3;
var argument10 = 1.5148165146794773e+308;
var base_0 = ["<","!Sx",49]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","!Sx",49]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","!Sx",49]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test916.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)