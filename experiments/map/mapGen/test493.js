





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = 1.6758899348573347e+308
argument2[1.6177106033227046e+308] = 618
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
base_1[6][3] = true
argument3[618] = "r"
return a-b+c
};
var argument3 = true;
var argument4 = {"T":157,"]":"5)PrV","1.0546776681946723e+308":"","":"kAW"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = [403,242]
base_2[9] = true
argument6[5] = [0,5e-324]
return a*b-c
};
var argument6 = "";
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
argument9[1.6177106033227046e+308] = {"L":714,"3.172720248002781e+307":""}
return a/b-c
};
var argument9 = false;
var argument10 = null;
var base_0 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
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
require("fs").writeFileSync("./experiments/map/mapGen/test493.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)