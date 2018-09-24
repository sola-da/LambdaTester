





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = 1.6758899348573347e+308
base_0[0][0] = 618
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = false
argument3[893] = true
argument3[4.224481734419934e+307] = "r"
return a-b+c
};
var argument3 = true;
var argument4 = {"T":157,"]":"5)PrV","1.0546776681946723e+308":"","":"kAW"};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = [403,242]
argument6[7] = true
argument6[5] = [0,5e-324]
return a*b-c
};
var argument6 = "";
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][7] = null
base_3[0][0] = {"L":714,"3.172720248002781e+307":""}
base_3 = [1.7976931348623157e+308,460,"X",607,595,49]
return a/b-c
};
var argument9 = r_2;
var argument10 = r_0;
var base_0 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","{zm","l","0","Wz 8kiT","bu","S","(`N4>dr"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test502.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)