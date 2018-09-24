





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"714":4.736863204667712e+307,"BimjI":4.760069439522623e+307,"A":"x-","":1.4859767706467873e+308,"7.503415553245377e+307":"","J":""}
base_0[1] = null
argument3[0] = true
return a*b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = [843,595,823,0,607,823]
base_1['length'] = 82
argument4[2] = false
return a*b/c
};
var argument4 = null;
var argument5 = "k^w-";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = [49,82,0]
return a/b*c
};
var argument7 = {"595":"","627":"","823":"","1.3742651775814065e+308":122,"2.530687348618865e+307":"","":"","3.0554588507810724e+306":"q}","A":0,"8.324652984609109e+307":157};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = ["Z","C"]
argument9[3] = ["ia","wT(",-100]
base_3[5] = [157,595,618]
return a+b/c
};
var argument9 = {"":"","H":1.1826570571183187e+308,"e[hm":""};
var base_0 = [1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/map/mapGen/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)