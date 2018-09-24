





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][8.05235215815219e+307] = {"1.135810254524254e+308":714,"1.5579684772927823e+308":""}
base_0[3][0] = 460
argument2[0] = {"2.864368733795747e+307":""}
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['1SHF1'] = ["i^zq","z"]
base_1[5] = ""
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[969] = [0,-100,157,213]
argument5[2][783] = null
return a+b/c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = ["1<%","E","]I","E","w","L","!{"]
argument6[7.92397107964922e+307] = 6.718313001608438e+307
return a+b-c
};
var argument7 = 893;
var argument8 = r_3;
var base_0 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m",627,705,"4Nz",-1,":T",213,607,403,"|"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test523.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)