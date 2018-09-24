





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1]['d'] = {"25":"","49":"","655":"7","*":9.944717699730713e+307,"":"","1.0928980909311949e+308":7.080746991583843e+307,"2.349375789630748e+307":"","}y":595,"7.297655352336853e+307":"","7.805115187626627e+307":""}
return a/b*c
};
var argument2 = "Y";
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = 1.0750608665794158e+308
base_1 = 2.3675049802050856e+307
return a/b/c
};
var argument5 = null;
var argument6 = [627,0,893,126,823,823,-100,783,25];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = true
base_2[8] = false
return a-b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
argument9[1]['d'] = null
return a*b*c
};
var argument9 = true;
var base_0 = ["aa","Q3vH)",")9T#","[","L","9s","#AfU","V"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["aa","Q3vH)",")9T#","[","L","9s","#AfU","V"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["aa","Q3vH)",")9T#","[","L","9s","#AfU","V"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test282.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)