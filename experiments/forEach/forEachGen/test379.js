





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = 627
argument2[7] = null
return a/b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument4[5] = ["qRz$Ry9P","-,","g","6]R","o{","_ve=","$c","?$=","le","q`VO"]
return a*b*c
};
var argument4 = 8.777659083490418e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4034744228995816e+308] = false
base_2[0] = false
argument5[2] = null
return a/b-c
};
var argument6 = false;
var argument7 = [25,460,823,"6",";",403,"s","4"];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[157] = true
return a*b/c
};
var argument9 = "";
var base_0 = ["x",607,403,82,49,"f3","-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x",607,403,82,49,"f3","-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x",607,403,82,49,"f3","-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x",607,403,82,49,"f3","-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test379.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)