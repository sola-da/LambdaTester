





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = null
argument2[705] = "=_"
base_0[2][5] = 1.5098015014989768e+307
return a/b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][8] = {"595":"","655":"o","893":"","1.2955883744597384e+308":"|","y":"86","":1.2986290025796278e+308,"1.7976931348623157e+308":714,"1.4497884879678071e+308":595,"-K":3.2415278374068876e+307,"5.619056980899075e+306":-1}
argument5[1] = {"49":4.334535100674145e+307,"q":"'P"}
return a/b/c
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [-1,460,"9p22"]
return a/b/c
};
var argument7 = [893,59];
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[122] = 607
argument11['^h'] = ["UEoT%","h","C","c>%T","IJ","0BH","&BYy"]
argument11[4] = null
return a+b/c
};
var base_0 = ["o","ueI","OLXP","|","# ","LJ(","6"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","ueI","OLXP","|","# ","LJ(","6"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","ueI","OLXP","|","# ","LJ(","6"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o","ueI","OLXP","|","# ","LJ(","6"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test877.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)