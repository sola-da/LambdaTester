





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = ["y",122,"p",213,969,"Dx"]
argument2[1] = {"213":"","-100":"imjI"}
argument2[5] = {"714":4.736863204667712e+307,"A":"x-","":"&zm"}
return a+b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
argument5 = 2.5474291010314126e+307
return a+b/c
};
var argument4 = r_0;
var argument5 = 627;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [843,595,823,0,607,823]
base_2['length'] = 82
base_2[1][1] = false
return a*b/c
};
var argument7 = null;
var argument8 = "k^w-";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = [49,82,0]
return a/b*c
};
var argument10 = {"595":"","627":"","823":"","1.3742651775814065e+308":122,"2.530687348618865e+307":"","":"","3.0554588507810724e+306":"q}","A":0,"8.324652984609109e+307":157};
var base_0 = [157,"]:{k","z6"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"]:{k","z6"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"]:{k","z6"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"]:{k","z6"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)