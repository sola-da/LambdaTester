





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = {"59":"&[{","242":"","843":595,"0j_3Nvx)":"","":""}
argument2[403] = true
argument2[4] = true
return a/b-c
};
var argument2 = null;
var argument3 = ["F","t","U{"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 1.733219635146808e+308
base_1[5] = null
return a/b/c
};
var argument5 = 618;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
argument7[4] = [59,460,823,-100,122,893,100]
base_2[0] = true
return a*b/c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 843
base_3[2] = false
argument9[82] = null
return a+b/c
};
var argument9 = "q";
var argument10 = {"49":242,"126":893,"607":0,"969":"","|":"H","5.985567583202208e+307":"I","+":"<x","":82,"R":"","_O":157};
var base_0 = [157,783,627,618,59,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,783,627,618,59,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,783,627,618,59,705]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,783,627,618,59,705]
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
require("fs").writeFileSync("./experiments/map/mapGen/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)